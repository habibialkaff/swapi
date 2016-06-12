import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {ListItem} from '../common/components/ListItem';


class Vehicle extends Component {
  constructor(props) {
    super(props);

    this.goToDetail = this.goToDetail.bind(this);

    this.state = {
    };
  }

  goToDetail(key) {
    this.props.goTo(`/vehicles/${key}`);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.vehicles).map((key) => {
          return (<ListItem key={key} id={key} name={this.props.vehicles[key]} onItemClick={this.goToDetail} />);
        }) }
      </div>
    );
  }
}

Vehicle.propTypes = {
  vehicles: PropTypes.object,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {vehicles} = state.boot.data;
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
