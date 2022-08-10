export function LoginForm() {
    return (
        <section>
            <h3>Login Form</h3>
            <form>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </section>
    );
}
