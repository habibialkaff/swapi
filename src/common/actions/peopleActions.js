import {httpRequest} from '../helpers/httpRequest';
import {PEOPLE} from '../constants/actionTypes';

export function load(id) {
  return (dispatch) => {
    httpRequest.get(`https://swapi.co/api/people/${id}/`)
      .then((data) => {
        dispatch({
          type: PEOPLE.LOAD_SUCCESS,
          people_detail: data
        });
      });
  };
}

export function unload() {
  return (dispatch) => {
    dispatch({
      type: PEOPLE.UNLOAD_SUCCESS
    });
  };
}
