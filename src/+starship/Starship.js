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
        {this.props.starships.map((item) => {
          return (<ListItem key={item.id} id={item.id} name={item.name} onItemClick={this.goToDetail} />);
        }) }
      </div>
    );
  }
}

Starship.propTypes = {
  starships: PropTypes.array,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {starships} = state.boot.dataArr;
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
