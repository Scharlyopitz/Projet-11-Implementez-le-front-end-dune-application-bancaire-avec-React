// import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";
import { useNavigate } from "react-router";

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/user");

        dispatch(
            login({
                name: username,
                password: password,
                loggedIn: true,
            })
        );
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                    <button className="sign-in-button">Sign In</button>
                    {/* <!--  --> */}
                </form>
            </section>
        </main>
    );
}
