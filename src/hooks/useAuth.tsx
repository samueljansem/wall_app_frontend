import { createContext, useContext, useEffect, useState } from 'react';
import {
    AuthContextData,
    AuthProviderProps,
    AuthTokens,
    DecodedAccessToken,
    User,
    UserLoginInput,
    UserSignupInput,
} from '../@types/auth';
import jwt from 'jwt-decode';
import { useApi } from './useApi';

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export function AuthProvider({ children }: AuthProviderProps) {
    const [tokens, setTokens] = useState<AuthTokens | null>(null);
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const stringTokens = localStorage.getItem('auth_tokens');

        if (stringTokens === null) return;

        const localToken = JSON.parse(stringTokens) as AuthTokens;

        setTokens(localToken);

        const decodedValue = jwt(localToken.access) as DecodedAccessToken;

        setUser({
            id: decodedValue.user_id,
            username: decodedValue.username,
            email: decodedValue.email,
        } as User);

        setAuthenticated(true);
    }, []);

    const login = async (credentials: UserLoginInput) => {
        const response = await api.post<AuthTokens>('/token/', credentials);

        if (response.status === 200) {
            const decodedValue = jwt(
                response.data.access
            ) as DecodedAccessToken;

            setUser({
                id: decodedValue.user_id,
                username: decodedValue.username,
                email: decodedValue.email,
            } as User);

            setAuthenticated(true);

            localStorage.setItem('auth_tokens', JSON.stringify(response.data));
        }
    };

    const logout = () => {
        setAuthenticated(false);
        setUser(null);
        localStorage.clear();
    };

    const signup = async (credentials: UserSignupInput) => {
        const response = await api.post('/users/create/', credentials);

        if (response.status === 201) await login(credentials as UserLoginInput);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated,
                tokens,
                setTokens,
                login,
                logout,
                signup,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
