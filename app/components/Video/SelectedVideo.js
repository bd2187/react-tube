"use strict";

import React from "react";
import PropTypes from "prop-types";
import date from "../../utils/date";

function SelectedVideo({ selectedVideo }) {
    return (
        <div className="selected-video">
            <div className="aspect-ratio">
                <iframe
                    allowFullScreen
                    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                ></iframe>
            </div>
            <div className="video-description">
                <h3>{selectedVideo.snippet.title}</h3>
                <p className="publish-date">
                    Published on {date(selectedVideo.snippet.publishedAt)}
                </p>
                <p className="description">
                    {selectedVideo.snippet.description}
                </p>
            </div>
        </div>
    );
}

SelectedVideo.propTypes = {
    selectedVideo: PropTypes.object.isRequired
};

export default SelectedVideo;
