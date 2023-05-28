import React, { Component } from 'react';
import './Loading.css';

export default class Loading extends Component {
  render() {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="loader" />
      </div>
    );
  }
}
