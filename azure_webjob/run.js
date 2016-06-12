/* eslint-disable strict */
'use strict';
const axios = require('axios');
const firebase = require('firebase');

const config = {
  serviceAccount: 'firebase-config.json',
  databaseURL: 'https://swapi-fire.firebaseio.com'
};

firebase.initializeApp(config);

const rootRef = firebase.database().ref();

function exit() {
  process.exit();
}

function query(url, prop, obj, resolve) {
  axios.get(url)
    .then(({ data }) => {
      data.results.forEach((item) => {
        const temp = item.url.split('/');
        const key = temp[temp.length - 2];
        const name = item[prop];
        obj[key] = name;
      });
      if (data.next) {
        query(data.next, prop, obj, resolve);
      } else {
        resolve();
      }
    });
}

function loadAndSave({name, prop}) {
  const promise = new Promise((resolve) => {
    const obj = {
      '__internal': name
    };

    const swapiPromise = new Promise((swapiResolve) => {
      query(`https://swapi.co/api/${name}/`, prop, obj, swapiResolve);
    });

    swapiPromise.then(() => {
      rootRef.child(name).set(obj).then(() => {
        // console.log(`${name} ${obj.$type}`);
        resolve();
      });
    });
  });

  return promise;
}

try {
  const data = [
    { name: 'people', prop: 'name' },
    { name: 'films', prop: 'title' },
    { name: 'starships', prop: 'name' },
    { name: 'vehicles', prop: 'name' },
    { name: 'species', prop: 'name' },
    { name: 'planets', prop: 'name' }
  ];

  const promises = [];

  data.forEach((item) => {
    promises.push(loadAndSave(item));
  });

  Promise.all(promises).then(exit);
} catch (e) {
  exit();
}
