import {PEOPLE} from '../constants/actionTypes';
import initialState from './initialState';

export function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case PEOPLE.LOAD_SUCCESS:
      return {
        ...state,
        current_people: action.people_detail
      };
    case PEOPLE.UNLOAD_SUCCESS:
      return {
        ...state,
        current_people: null
      };
    default:
      return state;
  }
}
