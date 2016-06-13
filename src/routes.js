import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import { ROUTES } from './common/constants/routePaths';
import {App} from './app';
import {Search} from './+search';
import {People, PeopleDetail} from './+people';
import {Planet, PlanetDetail} from './+planet';
import {Film, FilmDetail} from './+film';
import {Vehicle, VehicleDetail} from './+vehicle';
import {Starship, StarshipDetail} from './+starship';
import {Species, SpeciesDetail} from './+species';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to={`/${ROUTES.PEOPLE}`} />
    <Route path={ROUTES.SEARCH} component={Search} />
    <Route path={`${ROUTES.PEOPLE}/:id`} component={PeopleDetail} />
    <Route path={ROUTES.PEOPLE} component={People} />
    <Route path={`${ROUTES.PLANET}/:id`} component={PlanetDetail} />
    <Route path={ROUTES.PLANET} component={Planet} />
    <Route path={`${ROUTES.FILM}/:id`} component={FilmDetail} />
    <Route path={ROUTES.FILM} component={Film} />
    <Route path={`${ROUTES.VEHICLE}/:id`} component={VehicleDetail} />
    <Route path={ROUTES.VEHICLE} component={Vehicle} />
    <Route path={`${ROUTES.STARSHIP}/:id`} component={StarshipDetail} />
    <Route path={ROUTES.STARSHIP} component={Starship} />
    <Route path={`${ROUTES.SPECIES}/:id`} component={SpeciesDetail} />
    <Route path={ROUTES.SPECIES} component={Species} />
  </Route>
);
