# Frontend Project Structure

The frontend is built using React (via Vite).

## Directory Layout

```text
frontend/
├── src/
│   ├── assets/       # Static assets (images, icons)
│   ├── components/   # Reusable React components
│   │   └── auth/     # Auth specific components (LoginForm, RegisterForm)
│   ├── pages/        # Main route containers (Login, Register)
│   ├── services/     # API communication layer (authService.js)
│   ├── styles/       # CSS and theme styling (auth.css)
│   ├── App.jsx       # Main routing logic
│   └── main.jsx      # React entry point
```

## Key Technologies
- **React**: UI Library
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API requests
- **Vite**: Build tool and dev server
