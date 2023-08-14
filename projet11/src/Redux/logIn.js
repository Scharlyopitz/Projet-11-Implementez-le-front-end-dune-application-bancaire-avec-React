import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import { accountService } from "../components/accounterService";

export const loginUser = createAsyncThunk(
    "user,loginUser",
    async (userInformations) => {
        const request = await axios.post(
            "http://localhost:3001/api/v1/user/login",
            userInformations
        );

        const response = await request.data.body.token;
        accountService.saveToken(response);
        return response;
    }
);

const userSLice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    reducers: {
        resetToken: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (
                    action.error.message ===
                    "Request failed with status code 400"
                ) {
                    state.error = "Access Denied! Invalid Informations";
                } else {
                    state.error = action.error.message;
                }
            });
    },
});

export const { resetToken } = userSLice.actions;

export default userSLice.reducer;
