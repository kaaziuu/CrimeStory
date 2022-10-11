import axios, { AxiosError, AxiosResponse } from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.CRIME_STORY_API_URL}/Api/`,
});

axiosInstance.interceptors.request.use((config) => {
    const jwt = localStorage.getItem("jwt");

    if (jwt && jwt != null) {
        config.headers!.Authorization = jwt;
    }

    config.headers;
    return config;
});

axiosInstance.interceptors.response.use(
    (resp) => resp,
    (error: any) => {
        throw error.response?.data;
    }
);

const get = async <TResponse>(url: string) => {
    const response = await axiosInstance
        .get<TResponse>(url)
        .then((x) => x.data);

    return response;
};

const post = async <TRequest, TResponse>(
    url: string,
    body: TRequest
): Promise<TResponse> => {
    const response = await axiosInstance
        .post<TRequest, AxiosResponse<TResponse>>(url, body, {
            withCredentials: true,
        })
        .then((resp) => resp.data);

    return response;
};

const put = async <TRequest, TResponse>(
    url: string,
    body: TRequest
): Promise<TResponse> => {
    const response = await axiosInstance
        .put<TRequest, AxiosResponse<TResponse>>(url, body)
        .then((resp) => resp.data);

    return response;
};

const del = async <TResponse>(url: string): Promise<TResponse> => {
    const response = await axiosInstance
        .delete<TResponse>(url)
        .then((resp) => resp.data);

    return response;
};

const api = {
    get: get,
    post: post,
    put: put,
    delete: del,
};

export default api;
