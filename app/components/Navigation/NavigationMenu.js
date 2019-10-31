import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

/**
 * Renders the Navigation Menu whenever user clicks
 * user icon.
 */
const NavigationMenu = function NavigationMenu({
    toggleNavMenu,
    toggleDarkTheme,
    darkTheme,
    user,
    signOutUser
}) {
    const { email, id, username } = user;
    const updateDarkTheme = function updateDarkTheme() {
        toggleDarkTheme(!darkTheme);
    };
    return (
        <>
            <div
                onClick={toggleNavMenu}
                className={styles["navigation-menu-wrap"]}
            ></div>
            <div className={styles["navigation-menu"]}>
                <div className={styles["navigation-menu__user-info"]}>
                    <i
                        className={`
                            ${
                                styles["navigation-menu__user-icon"]
                            }                        
                            fa fa-user-circle
                        `}
                    ></i>
                    <div>
                        <p className={styles["navigation-menu__username"]}>
                            {username}
                        </p>
                        <p className={styles["navigation-menu__email"]}>
                            {email}
                        </p>
                    </div>
                </div>
                <ul className={styles["navigation-links"]}>
                    <li className={styles["navigation-links__item"]}>
                        <Link
                            to="/dashboard"
                            className={styles["navigation-link-wrap"]}
                        >
                            <i className="fa fa-user"></i>
                            Your Channel
                        </Link>
                    </li>
                    <li className={styles["navigation-links__item"]}>
                        <Link
                            to="/my-account"
                            className={styles["navigation-link-wrap"]}
                        >
                            <i className="fa fa-key"></i>
                            Manage your account
                        </Link>
                    </li>
                    <li className={styles["navigation-links__item"]}>
                        <span
                            className={styles["navigation-link-wrap"]}
                            onClick={updateDarkTheme}
                        >
                            <i className="fa fa-adjust"></i>
                            Dark theme: {darkTheme ? "On" : "Off"}
                        </span>
                    </li>
                    <li className={styles["navigation-links__item"]}>
                        <span
                            className={styles["navigation-link-wrap"]}
                            onClick={signOutUser}
                        >
                            {/* <i className="fa fa-sign-out-alt"></i> */}
                            Sign out
                        </span>
                    </li>
                </ul>
            </div>
        </>
    );
};

NavigationMenu.propTypes = {
    toggleNavMenu: PropTypes.func.isRequired,
    toggleDarkTheme: PropTypes.func.isRequired,
    darkTheme: PropTypes.bool.isRequired,
    signOutUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
};

export default NavigationMenu;
