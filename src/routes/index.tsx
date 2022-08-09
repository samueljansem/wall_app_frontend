import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import { Wall, Login, SignUp, NotFound } from '../pages';

export function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<App />} path="/">
                    <Route element={<Wall />} index />
                    <Route element={<Login />} path="/login" />
                    <Route element={<SignUp />} path="/signup" />
                    <Route element={<NotFound />} path="*" />
                </Route>
            </Routes>
        </Router>
    );
}
