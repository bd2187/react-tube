"use strict";

import React from 'react';
import PropTypes from 'prop-types';

class SelectedVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedVideo: null}
  }
  changeSelectedVideo(video) {
    this.setState(function(){
      return {selectedVideo: video}
    });
  }
  componentDidMount() {
    this.changeSelectedVideo(this.props.videosArr[0]);
  }
  render() {
    if (this.state.selectedVideo === null) {
      return null
    }
    else {
      var selectedVideo = this.state.selectedVideo;
      return (
        <div className="selected-video">
          <iframe
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}>
          </iframe>
          <h3>{selectedVideo.snippet.title}</h3>
          <p>Published on {selectedVideo.snippet.publishedAt}</p>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      );
    }
  }
}

SelectedVideo.propTypes = {
  videosArr: PropTypes.array.isRequired
}

export default SelectedVideo;
