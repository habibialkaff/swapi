import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {ListItem} from '../common/components/ListItem';


class Vehicle extends Component {
  constructor(props) {
    super(props);

    this.goToDetail = this.goToDetail.bind(this);
  }

  goToDetail(key) {
    this.props.goTo(`/vehicles/${key}`);
  }

  render() {
    return (
      <div data-test="vehicle-list">
        {this.props.vehicles.map((item) => {
          return (<ListItem key={item.id} id={item.id} name={item.name} onItemClick={this.goToDetail} />);
        }) }
      </div>
    );
  }
}

Vehicle.propTypes = {
  vehicles: PropTypes.array,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {vehicles} = state.boot.dataArr;
  return {
    vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goTo: (path) => {
      dispatch(routerActions.push(path));
    }
  };
}

const VehicleConnect = connect(mapStateToProps, mapDispatchToProps)(Vehicle);

export {VehicleConnect};
