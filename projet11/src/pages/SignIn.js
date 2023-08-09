import React, { useState } from "react";
import { useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/logIn";

export default function SignIn() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loading, error } = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();

        let userInformations = {
            email,
            password,
        };
        dispatch(loginUser(userInformations)).then((result) => {
            if (result.meta.requestStatus === "fulfilled") {
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

                    <button className="sign-in-button">
                        {loading ? "Loading...." : "Sign In"}
                    </button>
                    {error && <div className="alert-user">{error}</div>}
                </form>
            </section>
        </main>
    );
}
