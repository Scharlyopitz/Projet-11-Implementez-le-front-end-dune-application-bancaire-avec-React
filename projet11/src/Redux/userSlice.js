import { createSlice } from "@reduxjs/toolkit";

export const userSLice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = userSLice.actions;

export const selectUser = (state) => state.user.user;

export default userSLice.reducer;
