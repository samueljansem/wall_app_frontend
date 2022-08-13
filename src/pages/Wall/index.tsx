import { PostForm } from '../../components';
import { PostList } from '../../components/PostList';
import { useAuth } from '../../hooks/useAuth';

export function Wall() {
    const { authenticated } = useAuth();
    return (
        <>
            {authenticated ? <PostForm /> : <></>}

            <PostList />
        </>
    );
}
