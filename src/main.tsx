import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/useAuth';
import { PostsProvider } from './hooks/usePosts';
import { AppRouter } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <PostsProvider>
                <AppRouter />
            </PostsProvider>
        </AuthProvider>
    </React.StrictMode>
);
