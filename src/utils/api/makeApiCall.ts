import axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios';
import { getBearer } from "./getBearer";

const parseError = (error: AxiosError) => {
    // place to resolve error
    return error;
};

const query = (params: AxiosRequestConfig) => {
    // place to use interceptors (refresh token, etc.)
    return axios(params);
};

const makeApiCall = ({ url, method, data }: AxiosRequestConfig): AxiosPromise => {
    const bearer = getBearer();

    const fetchParams = {
        headers: {
            'Content-Type': 'application/json',
            ...(bearer && { Authorization: `Bearer ${bearer}` }),
        },
        url,
        withCredentials: true,
        method: method || 'GET',
        ...(data && { data: JSON.stringify(data) }),
    };

    return query(fetchParams)
        .then((data) => {
            return data;
        })
        .catch((err) => {
            if (err.response) {
                throw parseError(err.response);
            } else if (err.request) {
                throw parseError(err.request);
            } else {
                throw parseError(err);
            }
        });
};

export default makeApiCall;
