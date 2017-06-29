"use strict";

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    var searchValue = event.target.value;
    this.setState(function(){
      return {searchValue}
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  }
  render() {
    var searchValue = this.state.searchValue;
    return (
      <div className="search-bar">
      <img className="logo"
        src={require('../youtube.png')} alt="youtube logo"/>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={searchValue}
            placeholder="Search"
            autoComplete="off"
            onChange={this.handleInput}/>
          <button
            disabled={!searchValue}>
              <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SearchBar;
