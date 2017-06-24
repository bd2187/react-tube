"use strict";

import React from 'react';
import SearchBar from './SearchBar';
import SelectedVideo from './SelectedVideo';
import Videos from './Videos';

/*
Tentative Components Heirarchy:
- App
- SearchBar
- Selected Youtube video
- Video List
*/

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
        <SelectedVideo />
        <Videos />
      </div>
    );
  }
}

export default App;
