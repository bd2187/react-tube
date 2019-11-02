"use strict";

import React from "react";
import PropTypes from "prop-types";

const VideosList = function VideosList({ videos }) {
    return (
        <ul>
            {videos.map(function(video) {
                return (
                    <li
                        key={video.etag}
                        onClick={() => this.changeDisplayedVideo(index)}
                        className="video-list-item clearfix"
                    >
                        <img
                            src={video.snippet.thumbnails.high.url}
                            alt={`${video.snippet.title} video`}
                            className="video-thumbnail"
                        />
                        <h2 className="video-title">{video.snippet.title}</h2>
                    </li>
                );
            })}
        </ul>
    );
};

VideosList.propTypes = {
    videos: PropTypes.array.isRequired
};

export default VideosList;
