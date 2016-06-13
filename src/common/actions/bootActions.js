import {BOOT} from '../constants/actionTypes';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB3eNycz4jujJNxjSZ1PxFg56tME74rhy8',
  authDomain: 'swapi-fire.firebaseapp.com',
  databaseURL: 'https://swapi-fire.firebaseio.com',
  storageBucket: 'swapi-fire.appspot.com',
};

firebase.initializeApp(config);

const ref = firebase.database().ref();

export function loadAll() {
  return (dispatch) => {
    ref.once('value')
      .then((dataSnapshot) => {
        const data = dataSnapshot.val();
        const dataArr = {};

        Object.keys(data).forEach((dataType) => {
          const obj = data[dataType];
          delete obj.__internal;

          dataArr[dataType] = [];

          Object.keys(obj).forEach((id) => {
            dataArr[dataType].push({
              id,
              name: obj[id]
            });
          });

          dataArr[dataType].sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
        });

        dispatch({
          type: BOOT.LOAD_SUCCESS,
          data,
          dataArr
        });
      });
  };
}
