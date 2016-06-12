import {httpRequest} from '../helpers/httpRequest';
import {STARSHIP} from '../constants/actionTypes';

export function load(id) {
  return (dispatch) => {
    httpRequest.get(`https://swapi.co/api/starships/${id}/`)
      .then((data) => {
        dispatch({
          type: STARSHIP.LOAD_SUCCESS,
          starship_detail: data
        });
      });
  };
}

export function unload() {
  return (dispatch) => {
    dispatch({
      type: STARSHIP.UNLOAD_SUCCESS
    });
  };
}
