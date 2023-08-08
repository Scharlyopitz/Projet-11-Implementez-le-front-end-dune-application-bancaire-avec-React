import BankLogo from "../assets/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

import { accountService } from "./accounterService";

export default function Nav() {
    // CODE REPETER!!!!!!!!!!! ------------------------------------
    const [userInformations, setuserInformations] = useState();

    const token = accountService.token();

    const isLogged = accountService.isLoggedIn();

    useEffect(() => {
        if (isLogged) {
            axios
                .post(
                    "http://localhost:3001/api/v1/user/profile",
                    axios.interceptors.request.use((request) => {
                        request.headers.Authorization = `Bearer ${token}`;
                        return request;
                    })
                )
                .then((res) => {
                    console.log(res);
                    setuserInformations(res.data);
                })
                .catch((error) => console.log(error));
        }
    }, [isLogged, token]);

    // -------------------------------------------------------------

    let navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={BankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {token ? (
                <div className="user-nav">
                    <NavLink className="main-nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        {userInformations?.body.userName}
                    </NavLink>
                    <NavLink onClick={handleLogOut} className="main-nav-item">
                        <i className="fa-solid fa-power-off"></i>
                    </NavLink>
                </div>
            ) : (
                <div>
                    <NavLink className="main-nav-item" to="/sign-in">
                        SignIn
                    </NavLink>
                </div>
            )}
        </nav>
    );
}
