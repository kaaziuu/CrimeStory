import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { refreshToken } from "../../service/auth/AuthService";
import { useStore } from "../../stores/Store";
import pages from "../router/Pages";

export const jwtStoreName = "jwt";

interface props {
    children: ReactNode | ReactNode[];
}

const AuthProvider = ({ children }: props) => {
    const navigation = useNavigate();

    const refresh = refreshToken(
        (response) => {
            localStorage.setItem(jwtStoreName, response.jwt);
        },
        () => {
            localStorage.removeItem(jwtStoreName);
            navigation(pages.login);
        }
    );

    if (refresh.isLoading) {
        return <Loader />;
    }

    return <>{children}</>;
};

export default AuthProvider;
