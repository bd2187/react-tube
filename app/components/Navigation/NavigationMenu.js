import React from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";

/**
 * Renders the Navigation Menu whenever user clicks
 * user icon.
 */
const NavigationMenu = function NavigationMenu({ toggleNavMenu, user }) {
    return (
        <div
            onClick={toggleNavMenu}
            style={{ position: "fixed", top: 0, backgroundColor: "red" }}
        >
            <h1>test</h1>
        </div>
    );
};

NavigationMenu.propTypes = {
    toggleNavMenu: PropTypes.func.isRequired,
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
};

export default NavigationMenu;
