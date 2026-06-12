import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            try {
                // Ping to check if the session cookie is valid
                await axiosInstance.get('/api/v1/user/me');
                setIsAuthenticated(true);
                // Redirect on valid session
                window.location.href = 'https://loom.arqulat.com';
            } catch (error) {
                // Session is invalid or absent
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);

    if (loading) {
        return null; // Or a minimal loading spinner
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
