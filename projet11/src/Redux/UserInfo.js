import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "user",
    initialState: {
        username: "",
        email: "",
        firstname: "",
        lastname: "",
    },
    reducers: {
        setGetprofil: (state, action) => {
            state.username = action.payload.userName;
            state.email = action.payload.email;
            state.firstname = action.payload.firstName;
            state.lastname = action.payload.lastName;
        },
        setNewUsername: (state, action) => {
            state.username = action.payload.getUsername;
        },
    },
});

export const { setNewUsername, setGetprofil } = userInfo.actions;

export default userInfo.reducer;
