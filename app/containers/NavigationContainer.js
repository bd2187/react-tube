import React from "react";
import { connect } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import updateVideos from "../actions/searchedVideosActions";

const NavigationContainer = function NavigationContainer(props) {
    return <Navigation updateVideos={props.updateVideos} />;
};

const mapStateToProps = function mapStateToProps(store) {
    return {
        videos: store.searchedVideos
    };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        updateVideos: function(query) {
            return dispatch(updateVideos(query));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationContainer);
