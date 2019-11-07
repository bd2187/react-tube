"use strict";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Video.module.css";

const VideosList = function VideosList({ videos }) {
    return (
        <ul className={styles["videos-list"]}>
            {videos.map(function(video) {
                return (
                    <li
                        key={video.etag}
                        className={styles["videos-list__item"]}
                    >
                        <Link
                            to={`/${encodeURIComponent(video.snippet.title)}/${
                                video.id.videoId
                            }`}
                            className={styles["videos-list__link"]}
                        >
                            <img
                                src={video.snippet.thumbnails.high.url}
                                alt={`${video.snippet.title} video`}
                                className={styles["videos-list__thumbnail"]}
                            />

                            <h2 className={styles["videos-list__title"]}>
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
