let saveToken = (token) => {
    localStorage.setItem("token", token);
};

let logout = () => {
    localStorage.removeItem("token");
};

let isLoggedIn = () => {
    let token = localStorage.getItem("token");
    return !!token;
};

let token = () => {
    const getToken = localStorage.getItem("token");
    return getToken;
};

export const accountService = {
    saveToken,
    logout,
    isLoggedIn,
    token,
};
