import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {ListItem} from '../common/components/ListItem';


class Species extends Component {
  constructor(props) {
    super(props);

    this.goToDetail = this.goToDetail.bind(this);
  }

  goToDetail(key) {
    this.props.goTo(`/species/${key}`);
  }

  render() {
    return (
      <div data-test="species-list">
        {this.props.species.map((item) => {
          return (<ListItem key={item.id} id={item.id} name={item.name} onItemClick={this.goToDetail} />);
        }) }
      </div>
    );
  }
}

Species.propTypes = {
  species: PropTypes.array,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {species} = state.boot.dataArr;
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
