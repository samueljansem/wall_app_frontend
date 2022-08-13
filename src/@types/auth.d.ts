import { ReactNode } from 'react';

export interface User {
    id: number;
    username: string;
    email: string;
}

export type UserLoginInput = {
    username: string;
    password: string;
};

export interface UserSignupInput extends UserLoginInput {
    email: string;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface AuthContextData {
    user: User | null;
    tokens: AuthTokens | null;
    setTokens: (tokens: AuthTokens) => void;
    authenticated: boolean;
    signup: (credentials: UserSignupInput) => Promise<void>;
    login: (credentials: UserLoginInput) => Promise<void>;
    logout: () => void;
}

export interface AuthTokens {
    access: string;
    refresh: string;
}

export interface DecodedAccessToken {
    email: string;
    exp: datetime;
    iat: datetime;
    jti: string;
    token_type: string;
    user_id: number;
    username: string;
}
