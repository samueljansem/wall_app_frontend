import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AuthTokens, DecodedAccessToken } from '../@types/auth';
import { useAuth } from './useAuth';
import jwt from 'jwt-decode';
import dayjs from 'dayjs';

const baseUrl = 'http://localhost:8000/api';

export function useApi(): AxiosInstance {
    const { setTokens } = useAuth();

    const api = axios.create({
        baseURL: baseUrl,
    });

    api.interceptors.request.use(async (config: AxiosRequestConfig) => {
        const authTokens = localStorage.getItem('auth_tokens');

        if (authTokens === null) return config;

        const tokens = JSON.parse(authTokens) as AuthTokens;

        if (tokens === null || tokens === undefined) return config;

        config.headers = { Authorization: `Bearer ${tokens.access}` };

        const decodedValue = jwt(tokens.access) as DecodedAccessToken;

        const isExpired =
            dayjs.unix(parseInt(decodedValue.exp)).diff(dayjs()) < 1;

        console.log(isExpired);

        if (!isExpired) return config;

        const response = await axios.post<AuthTokens>(
            `${baseUrl}/token/refresh/`,
            {
                refresh: tokens.refresh,
            }
        );

        if (response.status === 200) {
            config.headers = {
                Authorization: `Bearer ${response.data.access}`,
            };
            setTokens(response.data);
            localStorage.removeItem('auth_tokens');
            localStorage.setItem('auth_tokens', JSON.stringify(response.data));
        }

        return config;
    });

    return api;
}
