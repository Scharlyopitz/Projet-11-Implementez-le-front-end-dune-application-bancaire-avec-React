import BankLogo from "../assets/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom";

// import { getToken } from "../Redux/callerService";

export default function Nav({ userInformations }) {
    // CODE REPETER!!!!!!!!!!!
    const token = JSON.parse(localStorage.getItem("user"));
    const getToken = token?.body?.token;

    let navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
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

            {getToken ? (
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
