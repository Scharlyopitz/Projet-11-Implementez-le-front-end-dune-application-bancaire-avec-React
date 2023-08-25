import Edit from "../components/Edit";
import Transaction from "../components/Transaction";

import { useState, useEffect } from "react";

import axios from "axios";

import { accountService } from "../components/accounterService";

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Redux/UserInfo";
import TitlePage from "../components/TitlePage";

export default function User() {
    const dispatch = useDispatch();

    const userInformations = useSelector((state) => state.UserInfo);

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
                    dispatch(getProfile(res.data.body));
                })
                .catch((error) => console.log(error));
        }
    }, [isLogged, token, dispatch]);

    const [edit, setEdit] = useState(false);

    const handleEditOn = () => {
        setEdit(true);
    };

    const handleEditOff = (e) => {
        e.preventDefault();
        setEdit(false);
    };

    return (
        <>
            <TitlePage
                title={`${userInformations?.firstname} ${userInformations?.lastname}`}
            />
            <main className="main bg-dark">
                {edit ? (
                    <Edit handleEditOff={handleEditOff} />
                ) : (
                    <div className="header">
                        <h1>
                            Welcome back
                            <br />
                            {userInformations?.firstname}{" "}
                            {userInformations?.lastname}
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
            </main>
        </>
    );
}
