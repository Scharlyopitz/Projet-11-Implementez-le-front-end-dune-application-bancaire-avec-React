import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Error from "./pages/Error";

import "./styles/main.css";

import { Route, Routes } from "react-router";

import { useEffect, useState } from "react";

import { userProfile } from "./Redux/UserProfile";
import Auth from "./components/Auth";

function App() {
    const [userInformations, setuserInformations] = useState();

    useEffect(() => {
        userProfile
            .getUser()
            .then((res) => setuserInformations(res.data))
            .catch((err) => console.log(err));
    }, []);

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
