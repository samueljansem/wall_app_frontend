import { ReactNode } from 'react';

export interface Post {
    id: number;
    body: string;
    author: string;
    authorId: number;
    created: datetime;
    updated: datetime;
}

export type PostInput = Omit<
    Post,
    'author' | 'authorId' | 'created' | 'updated' | 'id'
>;

export interface PostsProviderProps {
    children: ReactNode;
}

export interface PostsContextData {
    posts: Post[];
    createPost: (post: PostInput) => Promise<void>;
}
