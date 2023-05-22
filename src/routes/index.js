import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRoute";
import LayoutComponent from "../components/Layout";

import Home from "./home";
import Chart from "../components/Chart";
import Login from "./login";
import LeaderBoard from "./leaderboard";
import EditAccount from "./profile";
import SignUp from "./signup";
import Blog from "./blog";

const publicRoute = [
    {
        index: true,
        path: "chart",
        component: <Chart />,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "home",
        component: <Home />,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "home/:page",
        component: <Home />,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "leaderboard",
        component: <LeaderBoard />,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "profile",
        component: <EditAccount />,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "blog/:id",
        component: <Blog />,
        exact: true,
        restrict: true,
    },
];
const adminRoute = [
    {
        index: true,
        path: "login",
        component: <Login />,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "signup",
        component: <SignUp />,
        exact: true,
        restrict: true,
    },
];

const RouterComponent = () => {
    // useAutoLogout(jwt);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Navigate to="home" />} />
                <Route exact path="/" element={<PublicRoute />}>
                    <Route exact element={<LayoutComponent />}>
                        {publicRoute.map((route) => (
                            <Route
                                index={route.index}
                                key={route.path}
                                path={route.path}
                                element={route.component}
                                exact={route.exact}
                                restrict={route.restrict}
                            />
                        ))}
                    </Route>
                </Route>
                <Route exact element={<AdminRoute />}>
                    <Route exact>
                        {adminRoute.map((route) => (
                            <Route
                                index={route.index}
                                key={route.path}
                                path={route.path}
                                element={route.component}
                                exact={route.exact}
                                restrict={route.restrict}
                            />
                        ))}
                    </Route>
                </Route>
                {/* <Route path="/auth" element={<Auth />} />
                <Route path="/403" element={<Error403Page />} />
                <Route path="*" element={<Error404Page />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;
