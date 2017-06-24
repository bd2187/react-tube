"use strict";

import React from 'react';
import PropTypes from 'prop-types';

function changeDisplayedVideo(event) {
  console.log(event.target);
  console.log('change');
}

function renderLi(video) {
  return (
    <li key={video.etag}>
      <img src={video.snippet.thumbnails.default.url}/>
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </li>
  );
}

function Videos(props) {
  var videosArr = props.videosArr;
  return (
    <div className="videos">
      <ul onClick={changeDisplayedVideo}>
        {videosArr.map(renderLi)}
      </ul>
    </div>
  )
}

Videos.propTypes = {
  videosArr: PropTypes.array.isRequired
}

export default Videos;
