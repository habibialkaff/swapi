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
        Object.keys(data).forEach((key) => {
          delete data[key].__internal;
        });

        dispatch({
          type: BOOT.LOAD_SUCCESS,
          data
        });
      });
  };
}
