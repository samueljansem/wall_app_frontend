import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import App from '../App';
import { Wall, Login, SignUp, NotFound } from '../pages';
import { useAuth } from '../hooks/useAuth';

export function AppRouter() {
    const { authenticated } = useAuth();
    return (
        <Router>
            <Routes>
                <Route element={<App />} path="/">
                    <Route element={<Wall />} index />
                    <Route
                        element={
                            authenticated ? <Navigate to="/" /> : <Login />
                        }
                        path="/login"
                    />
                    <Route
                        element={
                            authenticated ? <Navigate to="/" /> : <SignUp />
                        }
                        path="/signup"
                    />
                    <Route element={<NotFound />} path="*" />
                </Route>
            </Routes>
        </Router>
    );
}
