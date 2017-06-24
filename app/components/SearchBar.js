"use strict";

import React from 'react';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <form>
        <input type="text"/>
      </form>
      <button>Search</button>
    </div>
  )
}

export default SearchBar;
