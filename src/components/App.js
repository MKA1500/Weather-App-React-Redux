import React, { Component } from 'react';
import './App.css';
import SearchBar from '../containers/SearchBar';

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <SearchBar />
      </div>
    );
  }
}
