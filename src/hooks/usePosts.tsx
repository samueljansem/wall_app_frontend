import { createContext, useContext, useEffect, useState } from 'react';
import {
    Post,
    PostInput,
    PostsContextData,
    PostsProviderProps,
} from '../@types/post';
import { api } from '../services/api';

const PostsContext = createContext<PostsContextData>({} as PostsContextData);

export function PostsProvider({ children }: PostsProviderProps) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        api.get('/posts/').then((response) => {
            setPosts(response.data);
        });
    }, []);

    async function createPost(postInput: PostInput) {
        const response = await api.post('/posts/create', postInput);

        setPosts([...posts, response.data]);
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
