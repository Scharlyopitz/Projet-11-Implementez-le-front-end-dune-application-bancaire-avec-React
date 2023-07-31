import { Navigate } from "react-router";
import { getToken } from "../Redux/callerService";

export default function Auth({ children }) {
    if (getToken) {
        return children;
    }

    return <Navigate to="/" />;
}
