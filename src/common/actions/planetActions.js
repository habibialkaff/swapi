import {httpRequest} from '../helpers/httpRequest';
import {PLANET} from '../constants/actionTypes';

export function load(id) {
  return (dispatch) => {
    httpRequest.get(`https://swapi.co/api/planets/${id}/`)
      .then((data) => {
        dispatch({
          type: PLANET.LOAD_SUCCESS,
          planet_detail: data
        });
      });
  };
}

export function unload() {
  return (dispatch) => {
    dispatch({
      type: PLANET.UNLOAD_SUCCESS
    });
  };
}
