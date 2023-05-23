import React, { Component } from 'react';

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
      </header>
    );
  }
}
