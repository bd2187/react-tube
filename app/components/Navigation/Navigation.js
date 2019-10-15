import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "../Link";
import styles from "./Navigation.module.css";
import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";

/**
 * Renders the Navigation header.
 * This also handles toggling both the search-bar
 * and navigation menu.
 */
const Navigation = function Navigation({ updateVideos, user }) {
    const [userQuery, setQuery] = useState("");
    const [searchBarOpened, setSearchBarOpened] = useState(false);
    const [navMenuOpened, setNavMenuOpened] = useState(false);

    const onSubmit = function onSubmit(evt) {
        evt.preventDefault();
        updateVideos(userQuery);
    };

    const updateValue = function updateValue(evt) {
        var value = evt.target.value;
        setQuery(value);
    };

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
            <div className={`${styles["header_logo"]}`}>
                <h1>logo</h1>
            </div>

            <SearchBar
                onSubmit={onSubmit}
                userQuery={userQuery}
                updateValue={updateValue}
                toggleSearchBar={toggleSearchBar}
            />

            <div className={`${styles["header_icons-container"]}`}>
                <i
                    onClick={toggleSearchBar}
                    className="fa fa-search"
                    aria-hidden="true"
                ></i>
                <i onClick={toggleNavMenu} className="fa fa-user-circle"></i>
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