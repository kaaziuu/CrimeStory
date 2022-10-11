import { Axios, AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import api from "./Axios";
import BaseError from "./models/BaseError";

export interface FetchModel<TResponse, TError> {
    url: string;
    name: string;
    config?: UseQueryOptions<TResponse, TError, TResponse, any>;
}

export interface MutationModel<TError> {
    url: string;
    onError?: (error: TError) => void;
}

export const useGet = <TResponse, TError = BaseError>(
    getData: FetchModel<TResponse, TError>
) => {
    const context = useQuery<TResponse, AxiosError<TError>>(getData.name, () =>
        api.get<TResponse>(getData.url)
    );
    return context;
};

export const usePost = <TRequest, TResponse, TError = BaseError>(
    postData: MutationModel<TError>
) => {
    const context = useMutation(
        (data: TRequest) => api.post<TRequest, TResponse>(postData.url, data),
        {
            onError: (e: TError) => {
                if (postData.onError) {
                    postData.onError(e);
                }
            },
        }
    );

    return context;
};
