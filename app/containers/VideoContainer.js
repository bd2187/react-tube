import React from "react";
import { connect } from "react-redux";

const VideoContainer = props => {
    return <h1>VideoContianer</h1>;
};

var mapStateToProps = function(store) {
    return {
        searchedVideos: store.searchedVideos
    };
};

export default connect(
    mapStateToProps,
    null
)(VideoContainer);
