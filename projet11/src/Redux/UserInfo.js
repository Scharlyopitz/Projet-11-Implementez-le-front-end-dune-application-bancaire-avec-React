import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "userInfo",
    initialState: {
        username: "",
        email: "",
        firstname: "",
        lastname: "",
    },
    reducers: {
        resetProfile: (state) => {
            state.username = "";
            state.email = "";
            state.firstname = "";
            state.lastname = "";
        },
        getProfile: (state, action) => {
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

export const { setNewUsername, getProfile, resetProfile } = userInfo.actions;

export default userInfo.reducer;
