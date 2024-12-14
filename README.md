# Startup Boilerplate

A modern, production-ready starter kit for full-stack web applications. Built with Express.js, MongoDB, and modern frontend technologies, featuring shadcn/ui-inspired theming system.

## 🚀 Quick Start

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

1. **Node.js** (v14 or higher)
   - Download from [Node.js official website](https://nodejs.org/)
   - Verify installation: `node --version`

2. **MongoDB** (v4.4 or higher)
   - Download from [MongoDB official website](https://www.mongodb.com/try/download/community)
   - Install MongoDB Compass (optional but recommended GUI tool)
   - Verify installation: `mongod --version`

3. **Git**
   - Download from [Git official website](https://git-scm.com/downloads)
   - Verify installation: `git --version`

### Installation Options

#### Option 1: Automated Setup (Recommended)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/startup-boilerplate.git your-project-name
   cd your-project-name
   ```

2. **Run the Setup Script**
   ```bash
   npm run setup
   ```
   The setup script will:
   - Ask for your project details (name, description, author)
   - Update all necessary files automatically
   - Initialize a fresh Git repository
   - Generate secure JWT secrets
   - Create a customized README
   - Set up the database configuration

3. **Install Dependencies and Start**
   ```bash
   npm install
   npm run dev
   ```

#### Option 2: Manual Setup

1. **Clone and Rename the Project**
   ```bash
   git clone https://github.com/your-username/startup-boilerplate.git your-project-name
   cd your-project-name
   rm -rf .git
   git init
   ```

2. **Update Project Information**
   - Edit `package.json`:
     ```json
     {
       "name": "your-project-name",
       "version": "1.0.0",
       "description": "Your project description"
     }
     ```
   - Update the MongoDB URI in `.env`:
     ```env
     MONGODB_URI=mongodb://localhost:27017/your-project-name
     ```
   - Update the title in `src/frontend/index.html`
   - Modify this README.md to reflect your project

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your values:
   ```env
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/your-project-name
   JWT_SECRET=your_generated_secret
   JWT_REFRESH_SECRET=your_generated_refresh_secret
   ```

### Starting the Application

1. **Start MongoDB**
   ```bash
   # On macOS/Linux:
   mongod

   # On Windows (in Admin PowerShell):
   net start MongoDB
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Application**
   - Open your browser and navigate to: `http://localhost:3000`
   - Default admin credentials (create these on first run):
     - Email: admin@example.com
     - Password: adminpassword

### Common Issues & Solutions

1. **MongoDB Connection Error**
   - Ensure MongoDB is running (`mongod`)
   - Check if the MongoDB URI in .env is correct
   - Verify MongoDB port (default: 27017) is not in use

2. **Node.js Port Conflict**
   - If port 3000 is in use, update PORT in .env
   - Check for other running Node.js processes

3. **Dependencies Installation Failed**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and package-lock.json
   - Run `npm install` again

## 🎨 Features

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

## 🎨 Theme System

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

## 📁 Project Structure

```
startup-boilerplate/
├── src/                  # Source files
│   ├── backend/         # Backend application
│   │   ├── config/     # Configuration files
│   │   ├── controllers/# Route controllers
│   │   ├── middleware/ # Custom middleware
│   │   ├── models/     # Database models
│   │   ├── routes/     # API routes
│   │   ├── utils/      # Utility functions
│   │   └── server.js   # Main server file
│   │
│   └── frontend/        # Frontend application
│       ├── assets/     # Static assets
│       ├── css/        # Stylesheets
│       ├── js/         # JavaScript files
│       └── index.html  # Main HTML file
│
├── .env.example         # Example environment variables
├── .gitignore          # Git ignore rules
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🔒 Security Features

- **Authentication**
  - JWT-based token system
  - Secure password hashing (bcrypt)
  - Refresh token mechanism
  - Role-based access control

- **API Security**
  - CORS protection
  - Rate limiting
  - Input validation
  - XSS prevention
  - CSRF protection
  - Secure headers (Helmet.js)

- **Data Protection**
  - Environment variables
  - Secure password storage
  - MongoDB security best practices

## 🚀 Development Workflow

1. **Start Development**
   ```bash
   npm run dev
   ```

2. **Run Tests**
   ```bash
   npm test
   ```

3. **Check Code Style**
   ```bash
   npm run lint
   ```

## 📦 Production Deployment

1. **Prepare for Production**
   - Update environment variables
   - Set NODE_ENV=production
   - Configure production database

2. **Build the Application**
   ```bash
   npm run build
   ```

3. **Start Production Server**
   ```bash
   npm start
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [JWT](https://jwt.io/)

## 📧 Support

For support, email your-email@example.com or create an issue in the repository. 