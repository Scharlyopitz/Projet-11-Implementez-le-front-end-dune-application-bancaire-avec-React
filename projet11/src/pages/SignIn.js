// import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { loginUser } from "../Redux/logIn";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let userInformations = {
            email,
            password,
        };
        dispatch(loginUser(userInformations)).then((result) => {
            if (result.payload) {
                setEmail("");
                setPassword("");
                navigate("/user");
            }
        });
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <a href="./user.html" class="sign-in-button">
                            Sign In
                        </a> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    <button className="sign-in-button">
                        {loading ? "Loading...." : "Sign In"}
                    </button>
                    {error && <div className="alert-user">{error}</div>}
                    {/* <!--  --> */}
                </form>
            </section>
        </main>
    );
}
