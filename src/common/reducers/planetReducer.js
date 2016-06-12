import {PLANET} from '../constants/actionTypes';
import initialState from './initialState';

export function planetReducer(state = initialState, action) {
  switch (action.type) {
    case PLANET.LOAD_SUCCESS:
      return {
        ...state,
        current_planet: action.planet_detail
      };
    case PLANET.UNLOAD_SUCCESS:
      return {
        ...state,
        current_planet: null
      };
    default:
      return state;
  }
}
