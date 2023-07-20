import BankLogo from "../assets/argentBankLogo.png";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Nav() {
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
            <div>
                <NavLink className="main-nav-item" to="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    SignIn
                </NavLink>
            </div>
        </nav>
    );
}
