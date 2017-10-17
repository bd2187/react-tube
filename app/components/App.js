'use strict';

import React from 'react';
import SearchBar from './SearchBar';
import SelectedVideo from './SelectedVideo';
import Videos from './Videos';
import YoutubeSearch from '../utils/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'React JS',
      videosArr: null,
      selectedVideo: null
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.changeSelectedVideo = this.changeSelectedVideo.bind(this);
  }
  handleSearch(searchTerm) {
    YoutubeSearch(searchTerm, (videosArr = []) => {
      this.setState({ videosArr, selectedVideo: videosArr[0] });
    });
  }
  changeSelectedVideo(video) {
    YoutubeSearch(video.snippet.title, (videosArr = []) => {
      this.setState({ videosArr });
    });

    this.setState(function() {
      return { selectedVideo: video };
    });
  }
  componentDidMount() {
    this.handleSearch(this.state.searchTerm);
  }
  render() {
    var videosArr = this.state.videosArr;
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleSearch} />
        {!videosArr
          ? <div className="loader" />
          : <div className="main-box clearfix">
              <SelectedVideo selectedVideo={this.state.selectedVideo} />
              <Videos
                videosArr={videosArr}
                changeSelectedVideo={this.changeSelectedVideo}
              />
            </div>}
      </div>
    );
  }
}
export default App;
