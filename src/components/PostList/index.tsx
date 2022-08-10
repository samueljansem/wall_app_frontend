import { usePosts } from '../../hooks/usePosts';
import { format, formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/esm/locale/en-US';
import styles from './styles.module.css';

export function PostList() {
    const { posts } = usePosts();

    const publishedDateRelativeToNow = (publishedDate: string) => {
        return formatDistanceToNow(Date.parse(publishedDate), {
            locale: enUS,
            addSuffix: true,
        });
    };

    const publishedDateFormatted = (publishedDate: string) => {
        return format(Date.parse(publishedDate), "LLLL d 'at' HH:mm", {
            locale: enUS,
        });
    };

    return (
        <section>
            {posts.map((post) => (
                <article key={post.id} className={styles.post}>
                    <header>
                        <strong>@{post.author}</strong>
                        <time
                            title={publishedDateFormatted(post.created)}
                            dateTime={post.created}
                        >
                            {publishedDateRelativeToNow(post.created)}
                        </time>
                    </header>
                    <hr />
                    <main className={styles.body}>{post.body}</main>
                </article>
            ))}
        </section>
    );
}
