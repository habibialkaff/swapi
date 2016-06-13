import React from 'react';
import {Link} from 'react-router';
import {ROUTES} from '../common/constants/routePaths';
import Search from 'material-ui/svg-icons/action/search';

export const Header = () => {
  return (
    <div className="layout-row layout-fill layout-margin">
      <div className="flex-5 layout-column layout-align-center-center">
        <Link to={`/${ROUTES.SEARCH}`}><Search color="white" /></Link></div>
      <div className="flex layout-column">
        <div
          className="layout-row layout-fill layout-wrap layout-align-space-around-center layout-padding"
          data-test="header">
          <Link to={`/${ROUTES.PEOPLE}`}>People</Link>
          <Link to={`/${ROUTES.PLANET}`}>Planet</Link>
          <Link to={`/${ROUTES.FILM}`}>Film</Link>
          <Link to={`/${ROUTES.SPECIES}`}>Species</Link>
          <Link to={`/${ROUTES.STARSHIP}`}>Starship</Link>
          <Link to={`/${ROUTES.VEHICLE}`}>Vehicle</Link>
        </div></div>
    </div>
  );
};
