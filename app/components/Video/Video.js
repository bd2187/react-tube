import React from "react";
import styles from "./Video.module.css";
import SelectedVideo from "./SelectedVideo";
import VideosList from "./VideosList";

const VideoWrap = function VideoWrap({ currentVideo, videos }) {
    return (
        <div className={styles["video-wrap"]}>
            <SelectedVideo selectedVideo={currentVideo} />
            <VideosList videos={videos} />
        </div>
    );
};

const Video = function Video({ searchedVideos }) {
    const {
        loadingVideoQuery,
        videos,
        error,
        errorMessage,
        currentVideo,
        query
    } = searchedVideos;

    // if loadingVideoQuery is true, render loading component

    // if there's an error, render the error component,

    // display videos

    return (
        <div className={styles["video-content-container"]}>
            {loadingVideoQuery ? <p>loading</p> : null}

            {error ? <p>error</p> : null}

            {videos.length > 0 ? (
                <VideoWrap currentVideo={currentVideo} videos={videos} />
            ) : null}
        </div>
    );
};

export default Video;
