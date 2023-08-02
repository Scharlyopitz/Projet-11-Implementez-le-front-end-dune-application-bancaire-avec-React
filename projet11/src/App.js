import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Error from "./pages/Error";
import Auth from "./components/Auth";

import "./styles/main.css";

import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

import { userProfile } from "./Redux/UserProfile";
import axios, { AxiosHeaders } from "axios";
// import { getToken } from "./Redux/callerService";

function App() {
    const [userInformations, setuserInformations] = useState();
    console.log(userInformations);
    // CODE REPETER!!!!!!!!!!!
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
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
    }, []);

    // userProfile
    //             .getUser()
    //             .then((res) => {
    //                 setuserInformations(res.data);
    //             })
    //             .catch((err) => console.log(err));

    return (
        <>
            <Nav userInformations={userInformations} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route
                    path="/user"
                    element={
                        <Auth>
                            <User userInformations={userInformations} />
                        </Auth>
                    }
                />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
