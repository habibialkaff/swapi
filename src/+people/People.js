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
          {this.props.people.map((item) => {
            return (<ListItem key={item.id} id={item.id} name={item.name} onItemClick={this.goToDetail} />);
          }) }
        </div>
      </div>
    );
  }
}

People.propTypes = {
  people: PropTypes.array,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {people} = state.boot.dataArr;
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
