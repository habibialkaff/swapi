import {STARSHIP} from '../constants/actionTypes';
import initialState from './initialState';

export function starshipReducer(state = initialState, action) {
  switch (action.type) {
    case STARSHIP.LOAD_SUCCESS:
      return {
        ...state,
        current_starship: action.starship_detail
      };
    case STARSHIP.UNLOAD_SUCCESS:
      return {
        ...state,
        current_starship: null
      };
    default:
      return state;
  }
}
