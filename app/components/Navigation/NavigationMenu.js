import React from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";

/**
 * Renders the Navigation Menu whenever user clicks
 * user icon.
 */
const NavigationMenu = function NavigationMenu({ toggleNavMenu, user }) {
    const { email, id, username } = user;
    return (
        <>
            <div
                onClick={toggleNavMenu}
                className={styles["navigation-menu-wrap"]}
            ></div>
            <div className={styles["navigation-menu"]}>
                <p>user info</p>
            </div>
        </>
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
