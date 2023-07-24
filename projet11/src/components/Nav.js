import BankLogo from "../assets/argentBankLogo.png";
// import { useLocation } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/userSlice";

export default function Nav() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        navigate("/");

        dispatch(logout());
    };

    // information de l'URL de la page
    // const location = useLocation();

    // const userNav =
    //     location.pathname === "/user" ? (
    //         <div>
    //             <Nav className="main-nav-item" to="/user">
    //                 <i className="fa fa-user-circle"></i>
    //                 Tony
    //             </Nav>
    //             <Nav className="main-nav-item" to="/">
    //                 <i className="fa fa-sign-out"></i>
    //                 Sign Out
    //             </Nav>
    //         </div>
    //     ) : (
    //         <NavLink className="main-nav-item" to="/sign-in">
    //             <i className="fa fa-user-circle"></i>
    //             SignIn
    //         </NavLink>
    //     );

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

            {user ? (
                <div className="user-nav">
                    <NavLink className="main-nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </NavLink>
                    <NavLink onClick={handleLogOut} className="main-nav-item">
                        <i class="fa-solid fa-power-off"></i>
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
