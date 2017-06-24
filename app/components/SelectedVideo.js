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
    </div>
  )
}

SelectedVideo.propTypes = {
  videos: PropTypes.array.isRequired
}

export default SelectedVideo;
