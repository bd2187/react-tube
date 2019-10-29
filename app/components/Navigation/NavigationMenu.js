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
                        Your Channel
                    </li>
                    <li className={styles["navigation-links__item"]}>
                        Manage your account
                    </li>
                    <li className={styles["navigation-links__item"]}>
                        Dark theme: On
                    </li>
                    <li className={styles["navigation-links__item"]}>
                        Sign out
                    </li>
                </ul>
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
