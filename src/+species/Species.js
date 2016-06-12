import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {ListItem} from '../common/components/ListItem';


class Species extends Component {
  constructor(props) {
    super(props);

    this.goToDetail = this.goToDetail.bind(this);

    this.state = {
    };
  }

  goToDetail(key) {
    this.props.goTo(`/species/${key}`);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.species).map((key) => {
          return (<ListItem key={key} id={key} name={this.props.species[key]} onItemClick={this.goToDetail} />);
        }) }
      </div>
    );
  }
}

Species.propTypes = {
  species: PropTypes.object,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {species} = state.boot.data;
  return {
    species
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goTo: (path) => {
      dispatch(routerActions.push(path));
    }
  };
}

const SpeciesConnect = connect(mapStateToProps, mapDispatchToProps)(Species);

export {SpeciesConnect};
