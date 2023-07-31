import { Navigate } from "react-router";
// import { getToken } from "../Redux/callerService";

export default function Auth({ children }) {
    // CODE REPETER!!!!!!!!!!!
    const token = JSON.parse(localStorage.getItem("user"));
    const getToken = token?.body?.token;
    if (getToken) {
        return children;
    }

    return <Navigate to="/" />;
}
