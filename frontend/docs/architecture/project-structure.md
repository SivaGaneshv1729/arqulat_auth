# Project Structure

```text
frontend/
├── docs/                       # Comprehensive frontend documentation
├── src/
│   ├── api/
│   │   └── axiosConfig.js      # Global Axios instance with credentials
│   ├── context/
│   │   └── AuthContext.jsx     # Global authentication state & session validation
│   ├── pages/
│   │   ├── MainLogin.jsx       # Landing page (Google OAuth + Email Link)
│   │   ├── LocalLogin.jsx      # Local email/password login form
│   │   └── LocalRegister.jsx   # Local email/password registration form
│   ├── styles/
│   │   └── Auth.css            # Structural CSS templates for handoff
│   ├── App.jsx                 # Routing configuration (React Router)
│   └── main.jsx                # React DOM entry point
├── package.json                # Project dependencies and scripts
└── vite.config.js              # Vite bundler configuration
```

## Description of Key Directories
- **`src/pages`**: Contains the primary route views. They act as containers that combine logic and styling.
- **`src/api`**: Holds the isolated API logic to keep components clean from direct fetch/axios implementations.
- **`src/context`**: Houses global state logic and side-effects (like redirecting if already logged in).
