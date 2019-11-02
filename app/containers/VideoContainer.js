import React, { useEffect } from "react";
import { connect } from "react-redux";
import Video from "../components/Video/Video";
import updateVideos from "../actions/searchedVideosActions";

const VideoContainer = ({ searchedVideos, updateVideos, match, history }) => {
    const { searchedVideo } = match.params;
    const { videoID } = match.params;
    useEffect(function() {
        updateVideos(searchedVideo, videoID);
    }, []);

    // Update URL params
    useEffect(
        function() {
            var pathname = searchedVideos.currentVideo.id
                ? `/${searchedVideos.query}/${searchedVideos.currentVideo.id.videoId}`
                : `/${searchedVideos.query}`;

            history.push({ pathname });
        },
        [searchedVideos.query, searchedVideos.currentVideo.id]
    );

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
