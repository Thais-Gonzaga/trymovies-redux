import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    const { search, handleInputSearch, handleSearch } = this.props;
    return (
      <div>
        <input
          type="text"
          name="search"
          value={ search }
          onChange={ handleInputSearch }
        />
        <button
          onClick={ handleSearch }
          type="button"
        >
          Procurar

        </button>
      </div>
    );
  }
}

Search.propTypes = PropTypes.shape({}).isRequired;
