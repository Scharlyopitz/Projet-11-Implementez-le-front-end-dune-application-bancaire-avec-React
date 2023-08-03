import { useState, useEffect } from "react";
import Edit from "../components/Edit";
import axios from "axios";

import { accountService } from "../Redux/accounterService";

export default function User() {
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
    const [edit, setEdit] = useState(false);

    const handleEditOn = () => {
        setEdit(true);
    };

    const handleEditOff = () => {
        setEdit(false);
    };

    return (
        <>
            <main className="main bg-dark">
                {edit ? (
                    <Edit
                        userInformations={userInformations}
                        handleEditOff={handleEditOff}
                    />
                ) : (
                    <div className="header">
                        <h1>
                            Welcome back
                            <br />
                            {userInformations?.body.firstName}{" "}
                            {userInformations?.body.lastName}
                        </h1>
                        <button className="edit-button" onClick={handleEditOn}>
                            Edit Name
                        </button>
                    </div>
                )}
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">
                            Argent Bank Checking (x8349)
                        </h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">
                            Available Balance
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                            View transactions
                        </button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">
                            Argent Bank Savings (x6712)
                        </h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">
                            Available Balance
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                            View transactions
                        </button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">
                            Argent Bank Credit Card (x8349)
                        </h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">
                            Current Balance
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                            View transactions
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
}
