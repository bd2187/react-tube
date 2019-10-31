import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import updateVideos from "../actions/searchedVideosActions";
import { toggleDarkTheme } from "../actions/themeActions";

/**
 * Renders the Navigation component while passing it
 * the updateVideos action and the user object as props.
 * @param Object props
 * @return Object Navigation component
 */
const NavigationContainer = function NavigationContainer(props) {
    var { updateVideos, toggleDarkTheme, user, darkTheme, location } = props;

    if (location.pathname === "/signin" || location.pathname === "/signup") {
        return null;
    } else {
        return (
            <Navigation
                updateVideos={updateVideos}
                toggleDarkTheme={toggleDarkTheme}
                darkTheme={darkTheme}
                user={user}
            />
        );
    }
};

const mapStateToProps = function mapStateToProps(store) {
    const { email, username, id } = store.user;
    const { darkTheme } = store.theme;
    return {
        user: {
            email,
            username,
            id
        },
        darkTheme
    };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        updateVideos: function(query) {
            return dispatch(updateVideos(query));
        },
        toggleDarkTheme: function(darkTheme) {
            return dispatch(toggleDarkTheme(darkTheme));
        }
    };
};

NavigationContainer.propTypes = {
    updateVideos: PropTypes.func.isRequired,
    toggleDarkTheme: PropTypes.func.isRequired,
    darkTheme: PropTypes.bool.isRequired,
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(NavigationContainer));
