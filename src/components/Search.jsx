import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

export default class Search extends Component {
  render() {
    const { search, handleInputSearch, handleSearch } = this.props;
    return (
      <div className="relative">
        <input
          className="bg-zinc-600 rounded-md
        ps-5
        placeholder:text-zinc-300 p-2"
          type="text"
          name="search"
          value={ search }
          onChange={ handleInputSearch }
        />
        <button
          className="text-3xl "
          onClick={ handleSearch }
          type="button"
        >
          <AiOutlineSearch
            className="scale-90 hover:scale-100
           ease-in-out duration-150 absolute top-1 right-2"
          />
        </button>
      </div>
    );
  }
}

Search.propTypes = PropTypes.shape({}).isRequired;
