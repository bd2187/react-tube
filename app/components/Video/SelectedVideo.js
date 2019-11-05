import React, { useState } from "react";
import PropTypes from "prop-types";
import date from "../../utils/date";
import styles from "./Video.module.css";

function SelectedVideo({ selectedVideo }) {
    const [displayInfo, setDisplayInfo] = useState(false);
    const toggleInfo = function() {
        setDisplayInfo(!displayInfo);
    };

    return (
        <div className={styles["selected-video"]}>
            <div className={styles["selected-video__aspect-ratio"]}>
                <iframe
                    allowFullScreen
                    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                ></iframe>
            </div>
            <div
                className={`
                ${styles["selected-video-info"]}
                ${
                    displayInfo
                        ? styles["selected-video-info--display"]
                        : styles["selected-video-info--hide"]
                }
            `}
            >
                <div
                    className={styles["selected-video-info-header"]}
                    onClick={toggleInfo}
                >
                    <h3 className={styles["selected-video-info-header__title"]}>
                        {selectedVideo.snippet.title}
                    </h3>
                    <i
                        className={`
                        ${styles["selected-video-info-header__toggle"]}
                        fa fa-chevron-down
                    `}
                    ></i>
                </div>
                <div className={styles["selected-video-info-user-actions"]}>
                    <i className="fa fa-heart"></i>
                </div>

                <div className={styles["selected-video-info__description"]}>
                    <p
                        className={
                            styles["selected-video-info-header__publish-date"]
                        }
                    >
                        Published on {date(selectedVideo.snippet.publishedAt)}
                    </p>
                    <p className="description">
                        {selectedVideo.snippet.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

SelectedVideo.propTypes = {
    selectedVideo: PropTypes.object.isRequired
};

export default SelectedVideo;
