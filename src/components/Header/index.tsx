import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { useAuth } from '../../hooks/useAuth';

export function Header() {
    const { authenticated, user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <header className={styles.header}>
            <span className={styles.lg}>
                <Link to="/">Wallapp</Link>
            </span>
            <div className={styles.links}>
                {authenticated ? (
                    <>
                        <span className={styles.sm}>
                            <Link to={`/users/${user?.username}`}>
                                Hi, {user?.username}
                            </Link>
                        </span>
                        <span className={styles.sm}>
                            <a href="#" onClick={handleLogout}>
                                Logout
                            </a>
                        </span>
                    </>
                ) : (
                    <>
                        <span className={styles.sm}>
                            <Link to="/login">Login</Link>
                        </span>
                        <span className={styles.sm}>
                            <Link to="/signup">Signup</Link>
                        </span>
                    </>
                )}
            </div>
        </header>
    );
}
