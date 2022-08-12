import { createContext, useContext, useState } from 'react';
import {
    AuthContextData,
    AuthProviderProps,
    AuthTokens,
    DecodedAccessToken,
    User,
    UserLoginInput,
    UserSignupInput,
} from '../@types/auth';
import api from '../services/api';
import jwt from 'jwt-decode';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [tokens, setTokens] = useState<AuthTokens | null>(null);

    const login = async (credentials: UserLoginInput) => {
        const response = await api.post<AuthTokens>('/token/', credentials);

        if (response.status === 200) {
            setTokens(response.data);

            const decodedValue = jwt(
                response.data.access
            ) as DecodedAccessToken;

            setUser({
                id: decodedValue.user_id,
                username: decodedValue.username,
                email: decodedValue.email,
            } as User);

            setAuthenticated(true);

            localStorage.setItem('_auth', JSON.stringify(response.data));
        }
    };

    const logout = () => {
        setAuthenticated(false);
        setUser(null);
        setTokens(null);

        localStorage.clear();
    };

    const signup = async (credentials: UserSignupInput) => {
        const response = await api.post('/users/create/', credentials);

        if (response.status === 201) await login(credentials as UserLoginInput);
    };

    return (
        <AuthContext.Provider
            value={{ user, authenticated, tokens, login, logout, signup }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
