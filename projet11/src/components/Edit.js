import { useState } from "react";

import { accountService } from "./accounterService";

export default function Edit({ userInformations, handleEditOff }) {
    // CODE REPETER!!!!!!!!!!! ------------------------------------

    const token = accountService.token();

    // ------------------------------------------------------------

    const [username, setUsername] = useState("");

    const save = async (e) => {
        e.preventDefault();

        if (username !== "") {
            try {
                const res = await fetch(
                    "http://localhost:3001/api/v1/user/profile",
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({ userName: username }),
                    }
                );

                console.log(res);
            } catch (error) {
                console.log(error);
            }
            handleEditOff(e);
        }
    };

    return (
        <div className="edit-profile">
            <h2>Edit user info</h2>
            <form onSubmit={save}>
                <div>
                    <label htmlFor="username">User name:</label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={userInformations?.body.userName}
                    />
                </div>
                <div>
                    <label htmlFor="firstname">First name:</label>
                    <input
                        type="text"
                        id="firstname"
                        placeholder={userInformations?.body.firstName}
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last name:</label>
                    <input
                        type="text"
                        id="lastname"
                        placeholder={userInformations?.body.lastName}
                        disabled
                    />
                </div>

                <div className="edit-profile-button">
                    <button>Save</button>
                    <button onClick={handleEditOff}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
