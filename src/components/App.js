import React, { Component } from 'react';
import './App.css';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/weatherList';

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
