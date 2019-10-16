import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import Link from "../Link";
import styles from "./Navigation.module.css";
import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";
import Logo from "../../utils/img/youtube.png";

/**
 * Renders the Navigation header.
 * This also handles toggling both the search-bar
 * and navigation menu.
 */
const Navigation = function Navigation({ updateVideos, user }) {
    const [userQuery, setQuery] = useState("");
    const [searchBarOpened, setSearchBarOpened] = useState(false);
    const [navMenuOpened, setNavMenuOpened] = useState(false);

    /**
     * Submit query to redux by calling
     * updateVideos(userQuery)
     */
    const onSubmit = function onSubmit(evt) {
        evt.preventDefault();
        updateVideos(userQuery);
    };

    /**
     * Called per keystroke
     * to update text input's value
     */
    const updateValue = function updateValue(evt) {
        var value = evt.target.value;
        setQuery(value);
    };

    /**
     * Toggles opening/closing of search bar. (This is pertinent only for
     * mobile/tablet devices). Utilize setTimeout to ensure the call happens
     * at the end of the callstack to allow time for setSearchBarOpened() to complete.
     */
    const toggleSearchBar = function toggleSearchBar() {
        setSearchBarOpened(!searchBarOpened);
        var searchInput = document.getElementsByClassName(
            `${styles["search-form-container__text-input"]}`
        )[0];

        if (!searchBarOpened) {
            setTimeout(() => {
                searchInput.focus();
            }, 0);
        } else {
            setTimeout(() => {
                searchInput.blur();
            }, 0);
        }
    };

    /**
     * Toggles navigation menu
     */
    const toggleNavMenu = function toggleNavMenu() {
        setNavMenuOpened(!navMenuOpened);
    };

    return (
        <div
            className={`${styles["header"]} ${
                searchBarOpened ? styles["header--open-search-bar"] : ""
            }`}
        >
            {/* <Link /> */}
            <div className={`${styles["header__logo"]}`}>
                <img src={Logo} />
            </div>

            <SearchBar
                onSubmit={onSubmit}
                userQuery={userQuery}
                updateValue={updateValue}
                toggleSearchBar={toggleSearchBar}
            />

            <div className={`${styles["user-icons"]}`}>
                <i
                    onClick={toggleSearchBar}
                    className={`
                        ${styles["user-icons__icon"]}
                        ${styles["user-icons__item"]}
                        ${styles["search-icon"]}                        
                        fa fa-search
                    `}
                    aria-hidden="true"
                ></i>

                {user.id ? (
                    <i
                        onClick={toggleNavMenu}
                        className={`
                        ${styles["user-icons__icon"]}
                        ${styles["user-icons__item"]}
                        ${styles["user-icon"]}
                        fa fa-user-circle`}
                    ></i>
                ) : (
                    <Link to="/signin">
                        <div
                            className={`
                            ${styles["user-icons__sign-in"]}
                            ${styles["user-icons__item"]}
                        `}
                        >
                            <i
                                className={`
                        ${styles["user-icons__icon"]}
                        ${styles["user-icon"]}                        
                        fa fa-user-circle`}
                            ></i>
                            <p>SIGN IN</p>
                        </div>
                    </Link>
                )}
            </div>

            {navMenuOpened ? (
                <NavigationMenu toggleNavMenu={toggleNavMenu} user={user} />
            ) : null}
        </div>
    );
};

Navigation.propTypes = {
    updateVideos: PropTypes.func.isRequired,
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
};

export default Navigation;
