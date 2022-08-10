import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';

function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Outlet />
            </div>
        </>
    );
}

export default App;
