import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {load, unload} from '../common/actions/vehicleActions';
import {ListItem} from '../common/components/ListItem';
import Divider from 'material-ui/Divider';

class VehicleDetail extends Component {
  constructor(props) {
    super(props);

    this.skippedProps = {
      'created': true,
      'edited': true,
      'url': true
    };

    this.branding = {
      'length': 'Length',
      'max_atmosphering_speed': 'Max Atmosphering Speed',
      'crew': 'Crew',
      'passengers': 'Passengers',
      'cargo_capacity': 'Cargo Capacity',
      'consumables': 'Consumables',
      'vehicle_class': 'Vehicle Class',
      'pilots': 'Pilots',
      'films': 'Films'
    };

    this.goTo_films = this.goTo.bind(this, 'films');
    this.goTo_people = this.goTo.bind(this, 'people');
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
          case 'films':
          case 'pilots': {
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

VehicleDetail.propTypes = {
  params: PropTypes.object,
  detail: PropTypes.object,
  films: PropTypes.object,
  people: PropTypes.object,
  load: PropTypes.func,
  unload: PropTypes.func,
  goTo: PropTypes.func,
};

function mapStateToProps(state) {
  const {current_vehicle} = state.vehicle;
  const {films, people} = state.boot.data;

  return {
    detail: current_vehicle,
    films,
    people
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

const VehicleDetailConnect = connect(mapStateToProps, mapDispatchToProps)(VehicleDetail);

export {VehicleDetailConnect};
