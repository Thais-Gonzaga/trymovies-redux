import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import Search from './Search';

export default class Header extends Component {
  state = {
    userName: '',
  };

  componentDidMount() {
    this.setState({
      userName: localStorage.getItem('user'),
    });
  }

  render() {
    const { userName } = this.state;
    const { pathname, haveSearch } = this.props;
    return (
      <header
        className="w-[80%] h-32
        m-auto flex items-center justify-between"
      >
        <nav className="flex gap-4 text-2xl text-zinc-600 font-bold">
          <Link
            className={ pathname === '/home' ? 'text-red-600' : '' }
            to="/home"
          >
            Home
          </Link>
          <Link
            className={ pathname === '/favorites' ? 'text-red-600' : '' }
            to="/favorites"
          >
            Favorites
          </Link>
        </nav>
        {haveSearch && <Search { ...this.props } />}
        <div className="flex text-2xl font-bold items-center gap-2">
          <AiOutlineUser className="text-3xl" />
          <p>{userName}</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = PropTypes.shape({}).isRequired;
