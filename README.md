# credcars-frontend

A Vue 3 + TypeScript frontend application with authentication.

## Features

- **Authentication System**: Complete login and registration with backend integration
- **State Management**: Pinia store for authentication state
- **Form Validation**: Client-side validation for login and registration forms
- **Responsive Design**: Mobile-friendly login and registration interfaces
- **Token Management**: Automatic token storage and refresh

## Authentication Pages

### Login Page (`/login`)

- Email and password input fields
- Form validation (email format, password length)
- Loading states during authentication
- Error handling and display
- Link to registration page
- Responsive design for mobile devices

### Registration Page (`/register`)

- Email and password fields
- Form validation:
  - Email: valid email format
  - Password: minimum 6 characters
- Loading states during registration
- Error handling and display
- Link to login page
- Responsive design for mobile devices

## Backend Integration

The application expects a backend API running on `localhost:3000` with the following endpoints:

- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `GET /api/v1/auth/me` - Get current user info

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Navigate to the application:
   - Login: `http://localhost:5173/login`
   - Register: `http://localhost:5173/register`

## Authentication Flow

### Login Flow

1. User enters email and password
2. Form validates input client-side
3. Credentials are sent to backend API
4. On success, JWT token is stored in localStorage
5. User is redirected to home page
6. Token is automatically included in subsequent API requests

### Registration Flow

1. User enters email and password
2. Form validates inputs client-side
3. Registration data is sent to backend API
4. On success, JWT token is stored in localStorage
5. User is redirected to home page
6. Token is automatically included in subsequent API requests
