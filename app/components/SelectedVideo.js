"use strict";

import React from 'react';
import PropTypes from 'prop-types';

function SelectedVideo(props) {
  var selectedVideo = props.videos[0];
  console.log(selectedVideo)
  return(
    <div className="selected-video">
      <iframe
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}>
      </iframe>
      <a href={`https://www.youtube.com/user/${selectedVideo.snippet.channelTitle}`}>
        {selectedVideo.snippet.channelTitle}
      </a>
      <h3>{selectedVideo.snippet.title}</h3>
      <p>Published on {selectedVideo.snippet.publishedAt}</p>
      <p>{selectedVideo.snippet.description}</p>
    </div>
  )
}

SelectedVideo.propTypes = {
  videos: PropTypes.array.isRequired
}

export default SelectedVideo;
