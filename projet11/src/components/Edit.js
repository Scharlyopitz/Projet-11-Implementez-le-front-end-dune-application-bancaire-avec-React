import { useState } from "react";

import { accountService } from "./accounterService";

import { useDispatch, useSelector } from "react-redux";
import { setNewUsername } from "../Redux/UserInfo";

export default function Edit({ handleEditOff }) {
    const dispatch = useDispatch();

    const userInformations = useSelector((state) => state.UserInfo);

    const token = accountService.token();

    const [getUsername, setGetUsername] = useState("");

    const save = async (e) => {
        e.preventDefault();

        if (getUsername !== "") {
            try {
                const res = await fetch(
                    "http://localhost:3001/api/v1/user/profile",
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({ userName: getUsername }),
                    }
                );
                dispatch(setNewUsername({ getUsername }));

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
                        onChange={(e) => setGetUsername(e.target.value)}
                        placeholder={userInformations?.username}
                    />
                </div>
                <div>
                    <label htmlFor="firstname">First name:</label>
                    <input
                        type="text"
                        id="firstname"
                        placeholder={userInformations?.firstname}
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last name:</label>
                    <input
                        type="text"
                        id="lastname"
                        placeholder={userInformations?.lastname}
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
