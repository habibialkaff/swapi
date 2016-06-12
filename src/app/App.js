import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {loadAll} from '../common/actions/bootActions';
import {Header} from './Header';

class App extends Component {

  componentWillMount() {
    this.props.loadAll();
  }

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          {this.props.isBootLoaded ? this.props.children : <div>Loading...</div>}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  isBootLoaded: PropTypes.bool,
  loadAll: PropTypes.func
};

function mapStateToProps(state) {
  const {data} = state.boot;
  return {
    isBootLoaded: data !== undefined && data !== null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAll: () => {
      dispatch(loadAll());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
