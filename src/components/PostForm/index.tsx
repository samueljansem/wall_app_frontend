import { PaperPlaneRight } from 'phosphor-react';
import styles from './styles.module.css';

export function PostForm() {
    return (
        <article className={styles.postForm}>
            <header>
                <strong>Enter your post content:</strong>
            </header>
            <hr />
            <textarea className={styles.body}></textarea>
            <div className={styles.row}>
                <button type="submit" className={styles.submit}>
                    <PaperPlaneRight size={24} />
                    Send
                </button>
            </div>
        </article>
    );
}
