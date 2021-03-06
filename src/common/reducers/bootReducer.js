import {BOOT} from '../constants/actionTypes';
import initialState from './initialState';

export function bootReducer(state = initialState, action) {
  switch (action.type) {
    case BOOT.LOAD_SUCCESS:
      return {
        ...state,
        data: action.data,
        dataArr: action.dataArr,
        dataSearch: action.dataSearch
      };
    default:
      return state;
  }
}
