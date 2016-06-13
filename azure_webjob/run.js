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

function getName(item, type) {
  if (type === 'films') {
    return `${item.episode_id}. ${item.title}`;
  }

  return item.name;
}

function query(url, type, obj, resolve) {
  axios.get(url)
    .then(({ data }) => {
      data.results.forEach((item) => {
        const temp = item.url.split('/');
        const key = temp[temp.length - 2];
        const name = getName(item, type);
        obj[key] = name;
      });
      if (data.next) {
        query(data.next, type, obj, resolve);
      } else {
        resolve();
      }
    });
}

function loadAndSave({type}) {
  const promise = new Promise((resolve) => {
    const obj = {
      '__internal': type // This key is to force firebase to always return data as object
    };

    const swapiPromise = new Promise((swapiResolve) => {
      query(`https://swapi.co/api/${type}/`, type, obj, swapiResolve);
    });

    swapiPromise.then(() => {
      console.log(`${type} ${Object.keys(obj).length}`);
      rootRef.child(type).set(obj).then(() => {
        resolve();
      });
    });
  });

  return promise;
}

try {
  const data = [
    { type: 'people' },
    { type: 'films' },
    { type: 'starships' },
    { type: 'vehicles' },
    { type: 'species' },
    { type: 'planets' }
  ];

  const promises = [];

  data.forEach((item) => {
    promises.push(loadAndSave(item));
  });

  Promise.all(promises).then(exit);
} catch (e) {
  exit();
}
