import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <span>
                <Link to="/">Wall</Link>
            </span>
            <span>
                <Link to="/login">Login</Link>
            </span>
            <span>
                <Link to="/signup">Signup</Link>
            </span>
        </header>
    );
}
