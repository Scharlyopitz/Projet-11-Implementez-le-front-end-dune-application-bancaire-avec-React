import { Navigate } from "react-router";

import { accountService } from "./accounterService";

export default function Auth({ children }) {
    if (accountService.isLoggedIn()) {
        return children;
    }

    return <Navigate to="/" />;
}
