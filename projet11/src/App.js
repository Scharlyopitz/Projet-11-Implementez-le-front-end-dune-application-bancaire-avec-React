import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import "./styles/main.css";
import { Route, Routes } from "react-router";
function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user" element={<User />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
