"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputField = this.clearInputField.bind(this);
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
  clearInputField() {
    this.setState({searchValue: ""});
  }
  render() {
    var searchValue = this.state.searchValue;
    return (
      <div className="search-bar clearfix">
        <Link resetState={this.props.onSubmit} clearInputField={this.clearInputField}/>
        <div className="form-box">
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
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SearchBar;
