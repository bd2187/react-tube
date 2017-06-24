"use strict";

import React from 'react';
import PropTypes from 'prop-types';

function SelectedVideo(props) {
  var selectedVideo = props.selectedVideo;
  return(
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

SelectedVideo.propTypes = {
  selectedVideo: PropTypes.object.isRequired
}

export default SelectedVideo;
