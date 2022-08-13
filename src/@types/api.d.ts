import { AxiosInstance, AxiosResponse } from 'axios';
import { ReactNode } from 'react';
import { AuthTokens } from './auth';

export interface ApiContextData {
    api: AxiosInstance;
}

export interface ApiProviderProps {
    children: ReactNode;
}

export interface AuthorizationHeader {
    Authorization: string;
}
