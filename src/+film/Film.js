import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {ListItem} from '../common/components/ListItem';


class Film extends Component {
  constructor(props) {
    super(props);

    this.goToDetail = this.goToDetail.bind(this);

    this.state = {
    };
  }

  goToDetail(key) {
    this.props.goTo(`/films/${key}`);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.films).map((key) => {
          return (<ListItem key={key} id={key} name={this.props.films[key]} onItemClick={this.goToDetail} />);
        }) }
      </div>
    );
  }
}

Film.propTypes = {
  films: PropTypes.object,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {films} = state.boot.data;
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
