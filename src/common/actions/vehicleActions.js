import {httpRequest} from '../helpers/httpRequest';
import {VEHICLE} from '../constants/actionTypes';

export function load(id) {
  return (dispatch) => {
    httpRequest.get(`https://swapi.co/api/vehicles/${id}/`)
      .then((data) => {
        dispatch({
          type: VEHICLE.LOAD_SUCCESS,
          vehicle_detail: data
        });
      });
  };
}

export function unload() {
  return (dispatch) => {
    dispatch({
      type: VEHICLE.UNLOAD_SUCCESS
    });
  };
}
