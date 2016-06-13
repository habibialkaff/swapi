import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import TextField from 'material-ui/TextField';
import {debounce} from '../common/helpers/debounce';
import {SearchItem} from './SearchItem';

class Search extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearchText = this.onChangeSearchText.bind(this);
    this.goToDetail = this.goToDetail.bind(this);
    this.updateSearchResult = debounce(this.updateSearchResult.bind(this));

    this.brandingType = {
      'people': 'People',
      'film': 'Film',
      'planet': 'Planet',
      'species': 'Species',
      'starship': 'Starship',
      'vehicle': 'Vehicle'
    };

    this.state = {
      searchInputValue: '',
      filteredData: []
    };
  }

  onChangeSearchText(e) {
    this.setState({
      searchInputValue: e.target.value
    });

    this.updateSearchResult();
  }

  updateSearchResult() {
    const inputValue = this.state.searchInputValue;

    const val = inputValue.toLowerCase();
    const filteredData = [];

    if (!this.searchKeys) {
      this.searchKeys = Object.keys(this.props.dataSearch);
    }

    if (val) {
      let count = 0;

      this.searchKeys.some((key) => {
        if (count > 50) {
          return true;
        }

        if (key.toLowerCase().indexOf(val) > -1) {
          const items = this.props.dataSearch[key];
          filteredData.push(...items);
          count += items.length;
        }

        return false;
      });
    }

    this.setState({
      filteredData
    });
  }

  goToDetail(dataType, key) {
    this.props.goTo(`/${dataType}/${key}`);
  }

  render() {
    return (
      <div>
        <div className="layout-padding">
          <div>
            <TextField
              hintText="Search people, film, planet, species, starship, vehicle"
              floatingLabelText="Type your search here" fullWidth onChange={this.onChangeSearchText} />
          </div>
        </div>
        <div>
          {
            this.state.filteredData.map((item, index) => {
              return (
                <SearchItem
                  key={index} id={item.id} name={item.name}
                  dataType={item.dataType} onItemClick={this.goToDetail} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  dataSearch: PropTypes.object,
  goTo: PropTypes.func
};

function mapStateToProps(state) {
  const {dataSearch} = state.boot;
  return {
    dataSearch
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goTo: (path) => {
      dispatch(routerActions.push(path));
    }
  };
}

const SearchConnect = connect(mapStateToProps, mapDispatchToProps)(Search);

export {SearchConnect};
