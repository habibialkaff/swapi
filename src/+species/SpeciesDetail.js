import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {load, unload} from '../common/actions/speciesActions';
import {ListItem} from '../common/components/ListItem';
import Divider from 'material-ui/Divider';

class SpeciesDetail extends Component {
  constructor(props) {
    super(props);

    this.skippedProps = {
      'created': true,
      'edited': true,
      'url': true
    };

    this.branding = {
      'name': 'Name',
      'classification': 'Classification',
      'designation': 'Designation',
      'average_height': 'Average Height',
      'skin_colors': 'Skin Colors',
      'hair_colors': 'Hair Colors',
      'eye_colors': 'Eye Colors',
      'average_lifespan': 'Average Lifespan',
      'homeworld': 'Home World',
      'language': 'Language',
      'people': 'People',
      'films': 'Films'
    };

    this.goTo_planets = this.goTo.bind(this, 'planets');
    this.goTo_people = this.goTo.bind(this, 'people');
    this.goTo_films = this.goTo.bind(this, 'films');
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
          case 'people':
          case 'films': {
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

SpeciesDetail.propTypes = {
  params: PropTypes.object,
  detail: PropTypes.object,
  planets: PropTypes.object,
  people: PropTypes.object,
  films: PropTypes.object,
  load: PropTypes.func,
  unload: PropTypes.func,
  goTo: PropTypes.func,
};

function mapStateToProps(state) {
  const {current_species} = state.species;
  const {planets, people, films} = state.boot.data;

  return {
    detail: current_species,
    planets,
    people,
    films,
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

const SpeciesDetailConnect = connect(mapStateToProps, mapDispatchToProps)(SpeciesDetail);

export {SpeciesDetailConnect};
