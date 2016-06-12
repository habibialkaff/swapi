import React, {Component} from 'react';
import {Link} from 'react-router';
import {ROUTES} from '../common/constants/routePaths';

export class Header extends Component {
  render() {
    return (
      <div className="layout-row layout-fill layout-wrap layout-margin layout-align-space-around-center">
        <Link to={`/${ROUTES.PEOPLE}`}>People</Link>
        <Link to={`/${ROUTES.PLANET}`}>Planet</Link>
        <Link to={`/${ROUTES.FILM}`}>Film</Link>
        <Link to={`/${ROUTES.SPECIES}`}>Species</Link>
        <Link to={`/${ROUTES.STARSHIP}`}>Starship</Link>
        <Link to={`/${ROUTES.VEHICLE}`}>Vehicle</Link>
      </div>
    );
  }
}
