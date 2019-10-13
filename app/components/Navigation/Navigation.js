import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "../Link";

const Navigation = function Navigation({ updateVideos }) {
    const [userQuery, setQuery] = useState("");

    const onSubmit = function onSubmit(evt) {
        evt.preventDefault();
        updateVideos(userQuery);
    };

    const updateValue = function updateValue(evt) {
        var value = evt.target.value;
        setQuery(value);
    };

    return (
        <div className="search-bar clearfix">
            {/* <Link
                            resetState={this.props.onSubmit}
                            clearInputField={this.clearInputField}
                        /> */}
            <div className="form-box">
                <form onSubmit={onSubmit}>
                    <input
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
        </div>
    );
};

// class Navigation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchValue: ""
//         };
//         this.handleInput = this.handleInput.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.clearInputField = this.clearInputField.bind(this);
//     }
//     handleInput(event) {
//         var searchValue = event.target.value;
//         this.setState(function() {
//             return { searchValue };
//         });
//     }
//     handleSubmit(event) {
//         event.preventDefault();
//         this.props.onSubmit(this.state.searchValue);
//     }
//     clearInputField() {
//         this.setState({ searchValue: "" });
//     }
//     componentDidMount() {
//         this.textInput.focus();
//     }
//     render() {
//         var searchValue = this.state.searchValue;
//         return (
//             <div className="search-bar clearfix">
//                 <Link
//                     resetState={this.props.onSubmit}
//                     clearInputField={this.clearInputField}
//                 />
//                 <div className="form-box">
//                     <form onSubmit={this.handleSubmit}>
//                         <input
//                             type="text"
//                             value={searchValue}
//                             placeholder="Search"
//                             autoComplete="off"
//                             ref={input => {
//                                 this.textInput = input;
//                             }}
//                             onChange={this.handleInput}
//                         />
//                         <button disabled={!searchValue}>
//                             <i className="fa fa-search" aria-hidden="true"></i>
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

Navigation.propTypes = {
    updateVideos: PropTypes.func.isRequired
};

export default Navigation;
