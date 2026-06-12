import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import RegisterForm from '../components/auth/RegisterForm';
import '../styles/auth.css';

export default function Register() {
  return (
    <AuthLayout 
      title="Create an Account"
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Login here"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
