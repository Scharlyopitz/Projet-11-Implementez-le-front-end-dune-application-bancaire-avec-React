export default function Edit() {
    return (
        <div>
            <h2>Edit user info</h2>
            <form>
                <div>
                    <label htmlFor="username">User name</label>
                    <input type="text" id="username" />
                </div>
                <div>
                    <label htmlFor="firstname">First name</label>
                    <input type="text" id="firstname" />
                </div>
                <div>
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" id="lastname" />
                </div>

                <div>
                    <button>Save</button>

                    <button>Cancel</button>
                </div>
            </form>
        </div>
    );
}
