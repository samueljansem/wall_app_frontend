import { createContext, useContext, useEffect, useState } from 'react';
import {
    Post,
    PostInput,
    PostsContextData,
    PostsProviderProps,
} from '../@types/post';
import { useApi } from './useApi';

const PostsContext = createContext<PostsContextData>({} as PostsContextData);

export function PostsProvider({ children }: PostsProviderProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const api = useApi();

    useEffect(() => {
        api.get('/posts/').then((response) => {
            setPosts(response.data);
        });
    }, []);

    async function createPost(postInput: PostInput) {
        const response = await api.post('/posts/create/', postInput);

        setPosts([response.data, ...posts]);
    }

    return (
        <PostsContext.Provider value={{ posts, createPost }}>
            {children}
        </PostsContext.Provider>
    );
}

export function usePosts() {
    const context = useContext(PostsContext);

    return context;
}
