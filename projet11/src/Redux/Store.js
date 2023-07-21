import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});
