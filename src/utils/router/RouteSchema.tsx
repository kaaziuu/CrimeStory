import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../../App";
import LoginContainer from "../../pages/login/LoginContainer";
import pages from "./Pages";

export const authSchema = createBrowserRouter([
    {
        path: pages.home,
        element: <App />,
    },
    { path: pages.login, element: <LoginContainer /> },
]);
