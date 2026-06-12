import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const MainLogin = () => {
    const handleGoogleSignIn = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h1 className="auth-title">Welcome to Arqulat</h1>
                <button className="google-btn" onClick={handleGoogleSignIn}>
                    Sign in with Google
                </button>
                <Link to="/login" className="auth-link">
                    Or sign in with email
                </Link>
            </div>
        </div>
    );
};

export default MainLogin;
