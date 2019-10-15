import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import updateVideos from "../actions/searchedVideosActions";

const NavigationContainer = function NavigationContainer(props) {
    return <Navigation updateVideos={props.updateVideos} user={props.user} />;
};

const mapStateToProps = function mapStateToProps(store) {
    const { email, username, id } = store.user;
    return {
        user: {
            email,
            username,
            id
        }
    };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        updateVideos: function(query) {
            return dispatch(updateVideos(query));
        }
    };
};

NavigationContainer.propTypes = {
    updateVideos: PropTypes.func.isRequired,
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationContainer);
