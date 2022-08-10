import React from 'react';
import ReactDOM from 'react-dom/client';
import { PostsProvider } from './hooks/usePosts';
import { AppRouter } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <PostsProvider>
            <AppRouter />
        </PostsProvider>
    </React.StrictMode>
);
