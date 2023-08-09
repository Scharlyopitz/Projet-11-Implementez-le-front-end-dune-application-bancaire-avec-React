import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./logIn";
import UserInfo from "./UserInfo";

const store = configureStore({
    reducer: {
        user: userReducer,
        UserInfo: UserInfo,
    },
});

export default store;
