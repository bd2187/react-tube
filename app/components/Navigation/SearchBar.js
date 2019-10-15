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
            <i onClick={toggleSearchBar} className="fa fa-arrow-left"></i>
            <form
                className={`${styles["search-form-container__form"]}`}
                onSubmit={onSubmit}
            >
                <input
                    className={`${styles["search-form-container__text-input"]}`}
                    type="text"
                    value={userQuery}
                    placeholder="Search"
                    autoComplete="off"
                    onChange={updateValue}
                />
                <button disabled={!userQuery}>
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
