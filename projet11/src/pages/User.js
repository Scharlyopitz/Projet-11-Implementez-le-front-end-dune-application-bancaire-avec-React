import { useState } from "react";
import Edit from "../components/Edit";

export default function User({ userInformations }) {
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
