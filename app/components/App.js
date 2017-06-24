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
      videosArr: null
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(searchTerm) {
    YoutubeSearch(searchTerm, function(videosArr = []) {
      this.setState({videosArr});
    }.bind(this));
  }
  componentDidMount() {
    this.handleSearch(this.state.searchTerm);
  }
  render() {
    var videosArr = this.state.videosArr;
    console.log(videosArr);
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleSearch}/>
        { !videosArr
          ? <p>Loading</p>
          : <div>
              <SelectedVideo videos={videosArr}/>
              <Videos />
          </div>
        }


      </div>
    );
  }
}
export default App;
