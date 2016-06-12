import {SPECIES} from '../constants/actionTypes';
import initialState from './initialState';

export function speciesReducer(state = initialState, action) {
  switch (action.type) {
    case SPECIES.LOAD_SUCCESS:
      return {
        ...state,
        current_species: action.species_detail
      };
    case SPECIES.UNLOAD_SUCCESS:
      return {
        ...state,
        current_species: null
      };
    default:
      return state;
  }
}
