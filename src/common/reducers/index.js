import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {bootReducer as boot} from './bootReducer';
import {peopleReducer as people} from './peopleReducer';
import {filmReducer as film} from './filmReducer';
import {planetReducer as planet} from './planetReducer';
import {vehicleReducer as vehicle} from './vehicleReducer';
import {starshipReducer as starship} from './starshipReducer';
import {speciesReducer as species} from './speciesReducer';

const rootReducer = combineReducers({
  boot,
  people,
  planet,
  film,
  vehicle,
  starship,
  species,
  routing: routerReducer
});

export default rootReducer;
