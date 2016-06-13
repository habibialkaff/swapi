import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {ListItem} from '../common/components/ListItem';


class Film extends Component {
  constructor(props) {
    super(props);

    this.goToDetail = this.goToDetail.bind(this);
  }

  goToDetail(key) {
    this.props.goTo(`/films/${key}`);
  }

  render() {
    return (
      <div data-test="film-list">
        {this.props.films.map((item) => {
          return (<ListItem key={item.id} id={item.id} name={item.name} onItemClick={this.goToDetail} />);
        }) }
      </div>
    );
  }
}

Film.propTypes = {
  films: PropTypes.array,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {films} = state.boot.dataArr;
  return {
    films
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goTo: (path) => {
      dispatch(routerActions.push(path));
    }
  };
}

const FilmConnect = connect(mapStateToProps, mapDispatchToProps)(Film);

export {FilmConnect};
