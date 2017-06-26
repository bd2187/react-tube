"use strict";

import React from 'react';
import PropTypes from 'prop-types';

class SelectedVideo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var selectedVideo = this.props.selectedVideo;
    return (
      <div className="selected-video">
        <iframe
          allowFullScreen
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}>
        </iframe>
        <h3>{selectedVideo.snippet.title}</h3>
        <p>Published on {selectedVideo.snippet.publishedAt}</p>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    );
  }
}

SelectedVideo.propTypes = {
  selectedVideo: PropTypes.object.isRequired,
  changeSelectedVideo: PropTypes.func.isRequired

}

export default SelectedVideo;
