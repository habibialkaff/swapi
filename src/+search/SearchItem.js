import React, {PropTypes} from 'react';
import {ListItem as MaterialListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

const branding = {
  'people': 'People',
  'films': 'Film',
  'species': 'Species',
  'planets': 'Planet',
  'vehicles': 'Vehicle',
  'starships': 'Starship'
};

export const SearchItem = (props) => {
  const onItemClick = () => {
    props.onItemClick(props.dataType, props.id);
  };

  if (props.onItemClick) {
    return (
      <MaterialListItem
        onClick={onItemClick} rightIcon={<ActionInfo />}
        primaryText={props.name} secondaryText={branding[props.dataType]} />
    );
  }

  return (<MaterialListItem disabled>{props.name}</MaterialListItem>);
};

SearchItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  dataType: PropTypes.string,
  onItemClick: PropTypes.func
};
