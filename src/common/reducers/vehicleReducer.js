import {VEHICLE} from '../constants/actionTypes';
import initialState from './initialState';

export function vehicleReducer(state = initialState, action) {
  switch (action.type) {
    case VEHICLE.LOAD_SUCCESS:
      return {
        ...state,
        current_vehicle: action.vehicle_detail
      };
    case VEHICLE.UNLOAD_SUCCESS:
      return {
        ...state,
        current_vehicle: null
      };
    default:
      return state;
  }
}
