import {httpRequest} from '../helpers/httpRequest';
import {FILM} from '../constants/actionTypes';

export function load(id) {
  return (dispatch) => {
    httpRequest.get(`https://swapi.co/api/films/${id}/`)
      .then((data) => {
        dispatch({
          type: FILM.LOAD_SUCCESS,
          film_detail: data
        });
      });
  };
}

export function unload() {
  return (dispatch) => {
    dispatch({
      type: FILM.UNLOAD_SUCCESS
    });
  };
}
