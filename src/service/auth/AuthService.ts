import { AxiosError } from "axios";
import { useQuery } from "react-query";
import api from "../../utils/api/Axios";
import { useGet, usePost } from "../../utils/api/Query";
import LoginRequest from "./models/Request/LoginRequest";
import AuthResponse from "./models/Response/AuthResponse";

const url = {
    login: "Authentication/Login",
    refresh: "Authentication/Refresh",
};

export const login = (onError: (e: any) => void) => {
    const context = usePost<LoginRequest, AuthResponse>({
        url: url.login,
        onError: (e) => onError(e),
    });

    return context;
};

export const refreshToken = (
    onSuccess: (response: AuthResponse) => void,
    onError: (error: AxiosError) => void
) => {
    // here we use useQuery instead usePost or useGet because, refresh is a special query which fetch refresh token but by the post method
    const context = useQuery(
        "refresh",
        () => api.post<{}, AuthResponse>(url.refresh, {}),
        {
            onSuccess: onSuccess,
            onError: onError,
            cacheTime: 3 * 60 * 1000,
            refetchOnWindowFocus: true,
            refetchInterval: 3 * 60 * 1000,
        }
    );

    return context;
};
