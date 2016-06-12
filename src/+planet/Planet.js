import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {ListItem} from '../common/components/ListItem';


class Planet extends Component {
  constructor(props) {
    super(props);

    this.goToDetail = this.goToDetail.bind(this);

    this.state = {
    };
  }

  goToDetail(key) {
    this.props.goTo(`/planets/${key}`);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.planets).map((key) => {
          return (<ListItem key={key} id={key} name={this.props.planets[key]} onItemClick={this.goToDetail} />);
        }) }
      </div>
    );
  }
}

Planet.propTypes = {
  planets: PropTypes.object,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {planets} = state.boot.data;
  return {
    planets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goTo: (path) => {
      dispatch(routerActions.push(path));
    }
  };
}

const PlanetConnect = connect(mapStateToProps, mapDispatchToProps)(Planet);

export {PlanetConnect};