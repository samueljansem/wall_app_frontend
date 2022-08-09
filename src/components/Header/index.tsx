import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
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
