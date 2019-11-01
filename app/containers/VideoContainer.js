import React, { useEffect } from "react";
import { connect } from "react-redux";
import Video from "../components/Video/Video";
import updateVideos from "../actions/searchedVideosActions";

const VideoContainer = ({ updateVideos, match }) => {
    useEffect(function() {
        const { searchedVideo } = match.params;
        const { videoID } = match.params;
        updateVideos(searchedVideo, videoID);
    }, []);

    return <Video />;
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
