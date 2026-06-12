import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import MainLogin from './pages/MainLogin';
import LocalLogin from './pages/LocalLogin';
import LocalRegister from './pages/LocalRegister';

function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <AuthProvider>
            {/* Floating Theme Toggle */}
            <button 
                onClick={toggleTheme} 
                className="theme-toggle-floating" 
                aria-label="Toggle light/dark theme"
            >
                {theme === 'dark' ? (
                    // Sun Icon
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                    </svg>
                ) : (
                    // Moon Icon
                    <svg viewBox="0 0 24 24">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                )}
            </button>

            <Router>
                <Routes>
                    <Route path="/" element={<MainLogin />} />
                    <Route path="/login" element={<LocalLogin />} />
                    <Route path="/register" element={<LocalRegister />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
