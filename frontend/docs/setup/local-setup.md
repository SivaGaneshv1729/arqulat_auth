# Local Setup Guide

Follow these instructions to run the Vite + React frontend locally alongside the Spring Boot backend.

## Prerequisites
- Node.js (v18 or higher)
- NPM or Yarn
- The Arqulat Spring Boot backend must be running locally on port `8080`.

## Installation
1. Open a terminal and navigate to the `frontend` directory.
   ```bash
   cd path/to/arqulat_auth/frontend
   ```
2. Install dependencies.
   ```bash
   npm install
   ```

## Running the Application
1. Start the Vite development server.
   ```bash
   npm run dev
   ```
2. The server will start (usually on `http://localhost:5173`). Vite will output the exact local URL in the console.

## Connecting to the Backend
- The frontend relies on the backend running at `http://localhost:8080`.
- This connection is managed in `src/api/axiosConfig.js`. 
- No `.env` configuration is required for local development unless the backend port changes.
