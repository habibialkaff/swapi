import React from 'react';
import {Link} from 'react-router';
import {ROUTES} from '../common/constants/routePaths';

export const Header = () => {
  return (
    <div
      className="layout-row layout-fill layout-wrap layout-margin layout-align-space-around-center" data-test="header">
      <Link to={`/${ROUTES.PEOPLE}`}>People</Link>
      <Link to={`/${ROUTES.PLANET}`}>Planet</Link>
      <Link to={`/${ROUTES.FILM}`}>Film</Link>
      <Link to={`/${ROUTES.SPECIES}`}>Species</Link>
      <Link to={`/${ROUTES.STARSHIP}`}>Starship</Link>
      <Link to={`/${ROUTES.VEHICLE}`}>Vehicle</Link>
    </div>
  );
};
