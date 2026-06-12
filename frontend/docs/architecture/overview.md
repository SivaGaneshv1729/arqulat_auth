# Architecture Overview

The frontend serves as the central authentication gateway for `accounts.arqulat.com`.

## Core Principles
1. **No Backend Logic**: The frontend only renders forms, validates user input, and communicates with the Spring Boot backend via `http://localhost:8080`.
2. **Session Based**: Authentication strictly relies on `arqulat_session` HTTPOnly cookies. There are no tokens (JWTs) stored in local storage.
3. **Redirection Gateway**: After successful login, users are automatically redirected out of this gateway to the main application (`https://loom.arqulat.com`). There is no logout button here.

## Global Context (`AuthContext`)
The application is wrapped in an `AuthProvider` located at `src/context/AuthContext.jsx`.
- On application load, it fires a `GET` request to `/api/v1/user/me`.
- If a valid session cookie exists, the user is immediately redirected to `https://loom.arqulat.com`.
- If invalid or missing, it renders the login/registration pages.

## API Configuration (`axiosConfig.js`)
All HTTP communication utilizes an Axios instance:
- **Base URL**: `http://localhost:8080` (Configured for local development).
- **Credentials**: `withCredentials: true` is set globally. This is the **Golden Rule** for this project, allowing the browser to attach the `arqulat_session` HTTPOnly cookie to every request automatically.
