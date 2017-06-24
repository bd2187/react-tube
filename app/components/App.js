"use strict";

import React from 'react';

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
        <h1>React-Tube</h1>
      </div>
    );
  }
}

export default App;
