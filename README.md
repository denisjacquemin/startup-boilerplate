# Modern Full-Stack Web Application

A robust, secure, and scalable full-stack web application built with Express.js, MongoDB, and modern frontend technologies.

## Features

- **Authentication System**
  - JWT-based authentication
  - Secure password hashing
  - Refresh token mechanism
  - Role-based access control

- **User Management**
  - User registration and login
  - Profile management
  - Admin dashboard
  - User roles and permissions

- **Security**
  - HTTP headers security with Helmet.js
  - CORS protection
  - Rate limiting
  - Input validation and sanitization
  - Secure password handling

- **Frontend**
  - Modern, responsive design
  - Theme management based on shadcn/ui
  - Toast notifications
  - Form validation
  - Dynamic content loading

- **Backend**
  - RESTful API architecture
  - MongoDB with Mongoose
  - Express.js middleware
  - Error handling
  - Logging system

## Theme System

The application uses a modern theme system based on shadcn/ui color schemes, providing a consistent and beautiful design across the entire application.

### Theme Configuration

Configure the theme through environment variables in your `.env` file:

```env
# Theme Configuration (shadcn/ui)
THEME_BASE=slate        # Base color scheme
THEME_RADIUS=0.5rem    # Border radius
THEME_PRIMARY_COLOR=blue    # Primary color
THEME_SECONDARY_COLOR=slate # Secondary color
THEME_ACCENT_COLOR=violet   # Accent color
```

### Available Color Schemes

The theme system supports the following shadcn/ui color schemes:

- `slate` - A sophisticated, neutral palette
- `gray` - Classic grayscale theme
- `neutral` - Balanced, versatile colors
- `red` - Energetic, attention-grabbing
- `rose` - Soft, elegant pink tones
- `orange` - Warm, vibrant colors
- `green` - Natural, calming palette
- `blue` - Professional, trustworthy
- `yellow` - Bright, optimistic
- `violet` - Creative, luxurious

### Theme Features

1. **Dark/Light Mode**
   - Automatic dark/light mode switching
   - Persistent theme preferences
   - Smooth transitions between modes

2. **Dynamic Configuration**
   - Configure colors through environment variables
   - Runtime theme updates
   - Consistent styling across components

3. **Accessibility**
   - High contrast color combinations
   - WCAG 2.1 compliant color ratios
   - Clear visual hierarchy

4. **CSS Variables**
   All theme colors are available as CSS variables:
   ```css
   --background
   --foreground
   --card
   --card-foreground
   --popover
   --popover-foreground
   --primary
   --primary-foreground
   --secondary
   --secondary-foreground
   --muted
   --muted-foreground
   --accent
   --accent-foreground
   --destructive
   --destructive-foreground
   --border
   --input
   --ring
   ```

### Using Theme Colors

In your CSS:
```css
.my-component {
    background-color: var(--background);
    color: var(--foreground);
    border: 1px solid var(--border);
}
```

In your JavaScript:
```javascript
// Update theme configuration
theme.updateConfig({
    base: 'blue',
    radius: '0.75rem',
    primaryColor: 'violet'
});

// Toggle dark/light mode
theme.toggleTheme();

// Get current theme config
const config = theme.getConfig();
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd modern-fullstack-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   ```
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/modern-fullstack-app
   JWT_SECRET=your_jwt_secret_here
   JWT_REFRESH_SECRET=your_refresh_token_secret_here
   ```

## Running the Application

1. Start MongoDB:
   ```bash
   mongod
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Access the application:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── backend/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   └── server.js       # Main server file
│
└── frontend/
    ├── assets/         # Static assets
    ├── css/           # Stylesheets
    ├── js/            # JavaScript files
    └── index.html     # Main HTML file
```

## API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh-token` - Refresh access token

### User Endpoints

- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update current user
- `PUT /api/users/change-password` - Change password

### Admin Endpoints

- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID (admin only)
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

## Security Considerations

- All passwords are hashed using bcrypt
- JWT tokens are used for authentication
- API rate limiting is implemented
- Input validation and sanitization
- CORS is configured for security
- HTTP headers are secured with Helmet.js

## Development

### Running Tests
```bash
npm test
```

### Code Style
The project uses ESLint for code style. Run linting:
```bash
npm run lint
```

## Production Deployment

1. Set environment variables for production
2. Build the application:
   ```bash
   npm run build
   ```

3. Start the production server:
   ```bash
   npm start
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 