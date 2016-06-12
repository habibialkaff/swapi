import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {ListItem} from '../common/components/ListItem';


class People extends Component {
  constructor(props) {
    super(props);

    this.goToDetail = this.goToDetail.bind(this);

    this.state = {
    };
  }

  goToDetail(key) {
    this.props.goTo(`/people/${key}`);
  }

  render() {
    return (
      <div>
        <div>
          {Object.keys(this.props.people).map((key) => {
            return (<ListItem key={key} id={key} name={this.props.people[key]} onItemClick={this.goToDetail} />);
          }) }
        </div>
      </div>
    );
  }
}

People.propTypes = {
  people: PropTypes.object,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {people} = state.boot.data;
  return {
    people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goTo: (path) => {
      dispatch(routerActions.push(path));
    }
  };
}

const PeopleConnect = connect(mapStateToProps, mapDispatchToProps)(People);

export {PeopleConnect};
