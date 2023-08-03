import { useState, useEffect } from "react";
import Edit from "../components/Edit";
import Transaction from "../components/Transaction";

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
                <Transaction
                    account={{
                        argentBank: "Argent Bank Checking (x8349)",
                        money: "$2,082.79",
                        balance: "Available Balance",
                    }}
                />
                <Transaction
                    account={{
                        argentBank: "Argent Bank Savings (x6712)",
                        money: "$10,928.42",
                        balance: "Available Balance",
                    }}
                />
                <Transaction
                    account={{
                        argentBank: "Argent Bank Credit Card (x8349)",
                        money: "$184.30",
                        balance: "Current Balance",
                    }}
                />
                money:""
            </main>
        </>
    );
}
