import {FILM} from '../constants/actionTypes';
import initialState from './initialState';

export function filmReducer(state = initialState, action) {
  switch (action.type) {
    case FILM.LOAD_SUCCESS:
      return {
        ...state,
        current_film: action.film_detail
      };
    case FILM.UNLOAD_SUCCESS:
      return {
        ...state,
        current_film: null
      };
    default:
      return state;
  }
}
