"use strict";

import React from 'react';
import SearchBar from './SearchBar';
import SelectedVideo from './SelectedVideo';
import Videos from './Videos';
import YoutubeSearch from '../utils/api';

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
    this.state = {
      searchTerm: 'Star Wars',
      videosArr: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(searchTerm) {
    YoutubeSearch(searchTerm, function(videos) {
      this.setState({videos: videos});
      console.log(videos);
    }.bind(this));
  }
  componentDidMount() {
    this.handleSearch(this.state.searchTerm);
  }
  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleSearch}/>
        <SelectedVideo />
        <Videos />
      </div>
    );
  }
}

export default App;
