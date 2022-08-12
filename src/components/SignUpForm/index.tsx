import { FormEvent, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { UserSignupInput } from '../../@types/auth';
import styles from './styles.module.css';

export function SignUpForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    const { signup } = useAuth();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signup({ username, email, password } as UserSignupInput);
        formRef.current?.reset();
    };

    return (
        <section className={styles.wrapper}>
            <h3>Signup</h3>
            <hr />
            <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
                <div className={styles.row}>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.row}>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.row}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.row}>
                    <button type="submit" className={styles.submit}>
                        Register
                    </button>
                </div>
            </form>
        </section>
    );
}
