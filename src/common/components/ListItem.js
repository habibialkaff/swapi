import React, {PropTypes} from 'react';
import {ListItem as MaterialListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

export const ListItem = (props) => {
  const onItemClick = () => {
    props.onItemClick(props.id);
  };

  if (props.onItemClick) {
    return (<MaterialListItem onClick={onItemClick} rightIcon={<ActionInfo />}>{props.name}</MaterialListItem>);
  }

  return (<MaterialListItem disabled>{props.name}</MaterialListItem>);
};

ListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onItemClick: PropTypes.func
};
