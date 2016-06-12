import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {ListItem} from '../common/components/ListItem';


class Starship extends Component {
  constructor(props) {
    super(props);

    this.goToDetail = this.goToDetail.bind(this);

    this.state = {
    };
  }

  goToDetail(key) {
    this.props.goTo(`/starships/${key}`);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.starships).map((key) => {
          return (<ListItem key={key} id={key} name={this.props.starships[key]} onItemClick={this.goToDetail} />);
        }) }
      </div>
    );
  }
}

Starship.propTypes = {
  starships: PropTypes.object,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {starships} = state.boot.data;
  return {
    starships
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goTo: (path) => {
      dispatch(routerActions.push(path));
    }
  };
}

const StarshipConnect = connect(mapStateToProps, mapDispatchToProps)(Starship);

export {StarshipConnect};
