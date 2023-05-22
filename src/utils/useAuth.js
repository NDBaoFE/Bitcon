// import { useState, useEffect, useCallback, useContext } from "react";

// import Localstorage from "./Localstorage";
// import { UserContext } from "../Context/User.context";
// import { toastError } from "../components/ToastNotification/index";
// const useAuth = () => {
//     const [userRole, setUserRole] = useState(null);
//     const token = Localstorage.getToken();

//     const checkTokenExpiration = useCallback(() => {
//         if (token) {
//             const decoded = Localstorage.getJWTUser();
//             if (!decoded) {
//                 setUserRole(undefined);
//             }
//             if (decoded?.exp < Date.now() / 1000) {
//                 setUserRole(undefined);
//                 localStorage.removeItem("token");

//                 toastError(
//                     "Phiên đăng nhập đã hết hạn! Vui lòng đăng nhập lại"
//                 );
//                 return;
//             }
//         }
//     }, [token]);

//     useEffect(() => {
//         // Get the JWT token from the cookie
//         const token = Localstorage.getToken();

//         // If there is no token, return
//         if (!token) {
//             setUserRole(undefined);
//             return;
//         }

//         const intervalId = setInterval(checkTokenExpiration, 5000);
//         return () => clearInterval(intervalId);
//     }, [checkTokenExpiration]);

//     return { isLoading, userRole };
// };
// export default useAuth;
