import React, { useEffect } from "react";
import { connect } from "react-redux";

import Video from "../components/Video/Video";
import updateVideos from "../actions/searchedVideosActions";

var scrollToTop = function() {};

const VideoContainer = ({ searchedVideos, updateVideos, match, history }) => {
    const { searchedVideo } = match.params;
    const { videoID } = match.params;

    useEffect(function() {
        updateVideos(searchedVideo, videoID);
    }, []);

    // useEffect for user's searched video
    useEffect(
        function() {
            scrollToTop();

            var pathname = searchedVideos.currentVideo.id
                ? `/${searchedVideos.query}/${searchedVideos.currentVideo.id.videoId}`
                : `/${searchedVideos.query}`;

            window.history.pushState({}, "title", pathname);
        },
        [searchedVideos.currentVideo.id]
    );

    // useEffect for user clicking on video link
    useEffect(
        function() {
            if (
                searchedVideos.currentVideo.id &&
                searchedVideos.currentVideo.id.videoId !== videoID
            ) {
                scrollToTop();
                updateVideos(searchedVideo, videoID);
            }
        },
        [videoID]
    );

    return <Video searchedVideos={searchedVideos} />;
};

var mapStateToProps = function(store) {
    return {
        searchedVideos: store.searchedVideos
    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        updateVideos: function(searchedVideo, videoID) {
            return dispatch(updateVideos(searchedVideo, videoID));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoContainer);
