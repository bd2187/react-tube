import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../utils/img/youtube.png";

const SignIn = function SignIn({ signInUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateInputField = function updateInputField(evt) {
        const targetEl = evt.target;
        const type = targetEl.getAttribute("data-type");
        const value = targetEl.value;

        if (type === "email") {
            setEmail(value);
        }

        if (type === "password") {
            setPassword(value);
        }
    };

    const submitForm = function submitForm(evt) {
        evt.preventDefault();
        signInUser(email, password);
    };

    return (
        <div>
            <div>
                <img src={Logo} />
                <h1>Sign in</h1>
                <h3>to continue</h3>
            </div>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    data-type="email"
                    value={email}
                    onChange={updateInputField}
                    placeholder="Enter Email"
                    required
                />

                <input
                    type="password"
                    data-type="password"
                    value={password}
                    onChange={updateInputField}
                    placeholder="Enter Password"
                    required
                />

                <Link to="/create-account">Create account</Link>
                <input type="submit" value="Next" />
            </form>
        </div>
    );
};

export default SignIn;
