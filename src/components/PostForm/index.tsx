import { PaperPlaneRight } from 'phosphor-react';
import { FormEvent, useRef, useState } from 'react';
import { PostInput } from '../../@types/post';
import { usePosts } from '../../hooks/usePosts';
import styles from './styles.module.css';

export function PostForm() {
    const { createPost } = usePosts();
    const [body, setBody] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createPost({ body: body } as PostInput);

        formRef.current?.reset();
    };

    return (
        <article className={styles.wrapper}>
            <header>
                <strong>Enter your post content:</strong>
            </header>
            <hr />
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className={styles.container}></div>
                <div className="row">
                    <textarea
                        className={styles.body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <div className={styles.row}>
                    <button type="submit" className={styles.submit}>
                        <PaperPlaneRight size={24} />
                        Send
                    </button>
                </div>
            </form>
        </article>
    );
}
