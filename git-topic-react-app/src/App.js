import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';
import { render } from '@testing-library/react';
import DisplayContent from "./components/display";


class App extends React.Component {

  state = { searchTerm: 'JavaScript', click: 0 };

  constructor() {
    super();
  }

  handleSearchChange = key => {
    this.setState({ searchTerm: key });
    console.log("handleSearchChange:", key, this.state.searchTerm);
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
    console.debug("handleChange:", this.state, e.target.value);
  };

  render() {
    return (

      <div>
        <SearchBar initSearch={this.state.searchTerm} onSearchChange={this.handleSearchChange}></SearchBar>
        <div className="jumbotron">
          <DisplayContent search={this.state.searchTerm}></DisplayContent>
        </div>

      </div>
    );
  }
}

export default App;
