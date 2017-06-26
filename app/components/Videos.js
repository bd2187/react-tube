"use strict";

import React from 'react';
import PropTypes from 'prop-types';

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.renderLi = this.renderLi.bind(this);
  }
  changeDisplayedVideo(index) {
    this.props.changeSelectedVideo(this.props.videosArr[index]);
  }
  renderLi(video, index) {
    return (
      <li key={video.etag} onClick={() => this.changeDisplayedVideo(index)}>
        <img src={video.snippet.thumbnails.default.url}/>
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </li>
    );
  }
  render() {
    var videosArr = this.props.videosArr;
    console.log(this.props);
    return (
      <div className="videos">
        <ul>
          {videosArr.map(this.renderLi)}
        </ul>
      </div>
    );
  }
}

Videos.propTypes = {
  videosArr: PropTypes.array.isRequired,
  changeSelectedVideo: PropTypes.func.isRequired
}

export default Videos;
