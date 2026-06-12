import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Dynamic Redirection tracking with Security Whitelist
        const searchParams = new URLSearchParams(window.location.search);
        const redirectParam = searchParams.get('redirect_to');
        
        if (redirectParam) {
            try {
                const parsedUrl = new URL(redirectParam);
                const hostname = parsedUrl.hostname;
                const isValidDomain = hostname.endsWith('.arqulat.com') || hostname === 'arqulat.com' || hostname === 'localhost';
                if (isValidDomain) {
                    sessionStorage.setItem('redirect_to', parsedUrl.toString());
                }
            } catch (e) {
                // Ignore invalid URLs
            }
        }

        const checkSession = async () => {
            try {
                // Ping to check if the session cookie is valid
                await axiosInstance.get('/api/v1/user/me');
                setIsAuthenticated(true);
                
                // Redirect on valid session
                const target = sessionStorage.getItem('redirect_to') || 'https://arqulat.com';
                sessionStorage.removeItem('redirect_to');
                window.location.href = target;
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
