import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {load, unload} from '../common/actions/peopleActions';
import {ListItem} from '../common/components/ListItem';
import Divider from 'material-ui/Divider';

class PeopleDetail extends Component {
  constructor(props) {
    super(props);

    this.skippedProps = {
      'created': true,
      'edited': true,
      'url': true
    };

    this.branding = {
      'name': 'Name',
      'height': 'Height',
      'mass': 'Mass',
      'hair_color': 'Hair Color',
      'skin_color': 'Skin Color',
      'eye_color': 'Eye Color',
      'birth_year': 'Birth Year',
      'gender': 'Gender',
      'homeworld': 'Home World',
      'films': 'Films',
      'species': 'Species',
      'vehicles': 'Vehicles',
      'starships': 'Startships'
    };

    this.goTo_planets = this.goTo.bind(this, 'planets');
    this.goTo_films = this.goTo.bind(this, 'films');
    this.goTo_species = this.goTo.bind(this, 'species');
    this.goTo_vehicles = this.goTo.bind(this, 'vehicles');
    this.goTo_starships = this.goTo.bind(this, 'starships');
  }

  componentWillMount() {
    this.props.load(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.unload();
  }

  goTo(route, id) {
    this.props.goTo(`/${route}/${id}`);
  }

  render() {
    const {detail} = this.props;
    return detail ? (
      <div>{Object.keys(detail).filter((key) => !this.skippedProps[key] && detail[key]).map((key) => {
        let content;
        switch (key) {
          case 'homeworld': {
            const temp = detail[key].split('/');
            const planetId = temp[temp.length - 2];
            content = <div>{this.props.planets[planetId]}</div>;
            content = (
              <ListItem id={planetId} name={this.props.planets[planetId]} onItemClick={this.goTo_planets} />
            );
            break;
          }
          case 'films':
          case 'species':
          case 'starships':
          case 'vehicles': {
            const items = detail[key].map((item) => {
              const temp = item.split('/');
              const itemId = temp[temp.length - 2];
              const route = temp[temp.length - 3];
              return (
                <ListItem
                  key={itemId} id={itemId} name={this.props[route][itemId]} onItemClick={this[`goTo_${route}`]} />
              );
            });

            content = <div>{items}</div>;

            break;
          }
          default: {
            content = <ListItem name={detail[key]} />;
            break;
          }
        }

        return (
          <div key={key}>
            <div className="layout-row layout-align-start-center">
              <div className="layout-padding flex-30">{`${this.branding[key] || key}`}</div>
              <div className="flex">
                {content}
              </div>
            </div>
            <Divider />
          </div>
        );
      }) }</div>
    ) : <div>Loading...</div>;
  }
}

PeopleDetail.propTypes = {
  params: PropTypes.object,
  detail: PropTypes.object,
  planets: PropTypes.object,
  films: PropTypes.object,
  species: PropTypes.object,
  vehicles: PropTypes.object,
  starships: PropTypes.object,
  load: PropTypes.func,
  unload: PropTypes.func,
  goTo: PropTypes.func,
};

function mapStateToProps(state) {
  const {current_people} = state.people;
  const {planets, films, species, vehicles, starships} = state.boot.data;

  return {
    detail: current_people,
    planets,
    films,
    species,
    vehicles,
    starships
  };
}

function mapDispatchToProps(dispatch) {
  return {
    load: (id) => {
      dispatch(load(id));
    },
    unload: () => {
      dispatch(unload());
    },
    goTo: (path) => {
      dispatch(routerActions.push(path));
    }
  };
}

const PeopleDetailConnect = connect(mapStateToProps, mapDispatchToProps)(PeopleDetail);

export {PeopleDetailConnect};
