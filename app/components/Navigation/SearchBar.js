import React from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";

/**
 * Renders the search input for users to type their
 * video queries.
 */
const SearchBar = function SearchBar({
    onSubmit,
    userQuery,
    updateValue,
    toggleSearchBar
}) {
    return (
        <div className={`${styles["search-form-container"]}`}>
            <form
                className={`${styles["search-form-container__form"]}`}
                onSubmit={onSubmit}
            >
                <i
                    onClick={toggleSearchBar}
                    className={`
                        ${styles["search-form-container__back-btn"]}
                        fa fa-arrow-left
                    `}
                ></i>
                <input
                    className={styles["search-form-container__text-input"]}
                    type="text"
                    value={userQuery}
                    placeholder="Search"
                    autoComplete="off"
                    onChange={updateValue}
                    // onBlur={toggleSearchBar}
                />
                <button
                    disabled={!userQuery}
                    className={styles["search-form-container__search-btn"]}
                >
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    userQuery: PropTypes.string.isRequired,
    updateValue: PropTypes.func.isRequired,
    toggleSearchBar: PropTypes.func.isRequired
};

export default SearchBar;
