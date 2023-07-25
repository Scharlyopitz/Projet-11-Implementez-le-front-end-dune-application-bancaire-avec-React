import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./logIn";
import userProfil from "./userProfil";

const store = configureStore({
    reducer: {
        user: userReducer,
        profile: userProfil,
    },
});

export default store;
