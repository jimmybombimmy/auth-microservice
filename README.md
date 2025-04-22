# Authorisation Microservice

## Description

A microservice for authenticating users using a Postgres database.

## Setup Instructions


## Endpoints

This app will allow users to do the following

### 🔐 Authentication Endpoints
For login/logout and session management.

> POST /login
Accepts user credentials, returns access and refresh tokens.

> POST /logout
Invalidates the refresh token or session.

> POST /refresh-token
Takes a refresh token and returns a new access token.

### 🧑‍💻 Registration & Account Management
Handles new user signups and verification flows.

POST /register
Creates a new user account.

POST /verify-email
Verifies user email via a token.

POST /resend-verification
Resends email verification link.

POST /forgot-password
Starts the password reset process (sends email with token).

POST /reset-password
Resets password using a token from email.

POST /change-password
For logged-in users to change their password.

### 🔑 Authorization & Roles
If your system uses roles/permissions.

GET /me
Returns user profile for current token.

GET /permissions
Returns permissions associated with the current user.

GET /roles
(Admin use) List all roles.

POST /assign-role
Assigns a role to a user (admin action).

### 🧾 Token Management (optional/advanced)
If you're managing multiple devices or session tracking.

GET /sessions
Returns a list of active sessions/devices.

DELETE /sessions/:id
Log out from a specific session.

POST /revoke-token
Manually revoke a specific token (useful for admin).

### 🧪 Health and Debugging (optional)
Helps during development or monitoring.

GET /health
Health check endpoint for service monitoring.

GET /debug/token
Decode token info (for dev/debug purposes).
