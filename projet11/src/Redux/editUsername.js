// import { createAsyncThunk } from "@reduxjs/toolkit";

// import axios from "axios";
// import { accountService } from "./accounterService";

// export const loginUser = createAsyncThunk(
//     "user,editUsername",
//     async (username) => {
//         const request = await axios.put(
//             "http://localhost:3001/api/v1/user/login",
//             username
//         );
//         const response = await request.data.body.token;
//         accountService.saveToken(response);
//         return response;
//     }
// );
