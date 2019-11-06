"use strict";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VideosList = function VideosList({ videos }) {
    return (
        <ul>
            {videos.map(function(video) {
                return (
                    <li key={video.etag}>
                        <Link
                            to={`/${encodeURIComponent(video.snippet.title)}/${
                                video.id.videoId
                            }`}
                        >
                            <div>
                                <img
                                    src={video.snippet.thumbnails.high.url}
                                    alt={`${video.snippet.title} video`}
                                    className="video-thumbnail"
                                />
                            </div>
                            <h2 className="video-title">
                                {video.snippet.title}
                            </h2>
                        </Link>
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
