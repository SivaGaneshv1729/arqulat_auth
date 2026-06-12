import React from 'react';
import { Link } from 'react-router-dom';
import OAuthButtons from './OAuthButtons';
import '../../styles/auth.css';

export default function AuthLayout({ title, children, footerText, footerLink, footerLinkText }) {
  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{title}</h2>
        </div>
        
        {/* OAuth Buttons are centralized here in the layout */}
        <OAuthButtons />

        {/* Divider before the specific form */}
        <div className="auth-divider">
          <span>or</span>
        </div>
        
        {/* The specific form (LoginForm or RegisterForm) is injected here */}
        {children}
        
        <div className="auth-footer">
          {footerText} <Link to={footerLink}>{footerLinkText}</Link>
        </div>
      </div>
    </div>
  );
}
