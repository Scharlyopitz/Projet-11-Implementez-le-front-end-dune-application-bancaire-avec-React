export default function Edit({ userInformations, handleEditOff }) {
    const save = (e) => {
        e.preventDefault();
    };

    return (
        <div className="edit-profile">
            <h2>Edit user info</h2>
            <form>
                <div>
                    <label htmlFor="username">User name:</label>
                    <input
                        type="text"
                        id="username"
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
                    <button onClick={save}>Save</button>
                    <button onClick={handleEditOff}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
