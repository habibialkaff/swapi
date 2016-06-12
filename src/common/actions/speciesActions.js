import {httpRequest} from '../helpers/httpRequest';
import {SPECIES} from '../constants/actionTypes';

export function load(id) {
  return (dispatch) => {
    httpRequest.get(`https://swapi.co/api/species/${id}/`)
      .then((data) => {
        dispatch({
          type: SPECIES.LOAD_SUCCESS,
          species_detail: data
        });
      });
  };
}

export function unload() {
  return (dispatch) => {
    dispatch({
      type: SPECIES.UNLOAD_SUCCESS
    });
  };
}
