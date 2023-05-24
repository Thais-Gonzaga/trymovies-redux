import React, { Component } from 'react';
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
    return (
      <header>
        <p>{userName}</p>
        <Search { ...this.props } />
      </header>
    );
  }
}
