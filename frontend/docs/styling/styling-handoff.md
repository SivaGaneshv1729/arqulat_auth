# Frontend Authentication Styling Handoff Guide

**To:** Siva Ganesh  
**From:** Backend & Architecture Team  
**Subject:** Styling the Authentication Flows

This document explains where and how you can add your styling to the frontend Login and Registration flows. The functional structure (state management, API calls, validations, routing) is already built. Your focus will be on the CSS and themes.

## 1. Where to Edit

All minimal, structural CSS for the authentication flows is placed in a single file:
**`frontend/src/styles/auth.css`**

You should edit this file to apply colors, borders, shadows, typography, and hover animations.

## 2. Component Structure and Class Names

We have used semantic class names across the components so you can easily target them. 

### Global Authentication Classes
- `.auth-page-container`: The main wrapper for the Login or Registration pages. Useful for centering content and applying a background image or color.
- `.auth-card`: The white box (or glassmorphism box) that holds the form.
- `.auth-header`: Contains the logo and the Title (e.g., "Welcome Back" or "Create an Account").
- `.auth-footer`: The section at the bottom containing links like "Don't have an account? Register".

### Form specific Classes
- `.auth-form`: The `<form>` element itself.
- `.input-group`: A wrapper around a `<label>` and an `<input>` for a specific field.
- `.input-label`: The `<label>` element.
- `.input-field`: The `<input>` element (text, email, or password).
- `.auth-submit-btn`: The main submit button.
- `.auth-divider`: The "or" separator between standard login and social login.
- `.auth-google-btn`: The "Continue with Google" button. Usually styled with a white background, grey border, and a Google icon (Siva Ganesh: you can add the icon inside this button later).
- `.auth-error-message`: Container for displaying validation or API errors. Use red colors and maybe a slight shake animation here.
- `.auth-success-message`: Container for success alerts (e.g. "Registration successful!").

## 3. Recommended Design System Integration

1. If you are using Google Fonts, you can add them to `frontend/index.html`.
2. Feel free to use CSS Variables inside `:root` in `src/index.css` or `src/styles/auth.css` to manage theme colors (e.g., `--primary-color`, `--bg-color`).
3. For "glassmorphism" effects on the `.auth-card`, consider using:
   ```css
   .auth-card {
       background: rgba(255, 255, 255, 0.1);
       backdrop-filter: blur(10px);
       border: 1px solid rgba(255, 255, 255, 0.2);
   }
   ```
   
## 4. Current State

Right now, the pages are functional but look extremely basic. Once you add the CSS rules to `src/styles/auth.css`, the components will instantly update.

**IMPORTANT NOTE ON AUTH STRUCTURE:**  
The "Continue with Google" button has been extracted into its own separate component (`OAuthButtons.jsx`) which sits prominently at the top of the `Login.jsx` and `Register.jsx` pages. The Email/Password forms (`LoginForm.jsx` and `RegisterForm.jsx`) sit below it. This makes it very easy to just delete the `<LoginForm />` component from the page later when the backend drops support for it, leaving only the `OAuthButtons` intact.

*Note: Logout is not implemented yet, so there is no logout button or page to style at this moment.*
