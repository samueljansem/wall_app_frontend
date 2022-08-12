import { FormEvent, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { UserLoginInput } from '../../@types/auth';
import styles from './styles.module.css';

export function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    const { login } = useAuth();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await login({ username, password } as UserLoginInput);
        formRef.current?.reset();
    };

    return (
        <section className={styles.wrapper}>
            <h3>Login</h3>
            <hr />
            <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
                <div className={styles.row}>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.row}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.row}>
                    <button type="submit" className={styles.submit}>
                        Login
                    </button>
                </div>
            </form>
        </section>
    );
}
