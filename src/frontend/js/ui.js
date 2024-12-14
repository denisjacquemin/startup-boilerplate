class UIService {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupTheme();
        this.checkAuthState();
    }

    // DOM Elements
    get elements() {
        return {
            loginForm: document.getElementById('loginForm'),
            registerForm: document.getElementById('registerForm'),
            authForms: document.getElementById('authForms'),
            dashboard: document.getElementById('dashboard'),
            userMenu: document.getElementById('userMenu'),
            logoutBtn: document.getElementById('logoutBtn'),
            themeToggle: document.getElementById('themeToggle'),
            userNameDisplay: document.getElementById('userNameDisplay'),
            showRegisterLink: document.getElementById('showRegister'),
            showLoginLink: document.getElementById('showLogin'),
            toastContainer: document.getElementById('toastContainer')
        };
    }

    // Event Listeners
    setupEventListeners() {
        // Auth form submissions
        this.elements.loginForm?.addEventListener('submit', this.handleLogin.bind(this));
        this.elements.registerForm?.addEventListener('submit', this.handleRegister.bind(this));
        
        // Form toggles
        this.elements.showRegisterLink?.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleForms('register');
        });
        
        this.elements.showLoginLink?.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleForms('login');
        });

        // Theme toggle
        this.elements.themeToggle?.addEventListener('click', this.toggleTheme.bind(this));

        // Logout
        this.elements.logoutBtn?.addEventListener('click', this.handleLogout.bind(this));

        // User menu toggle
        document.addEventListener('click', this.handleUserMenuClick.bind(this));
    }

    // Auth State
    checkAuthState() {
        if (auth.isAuthenticated()) {
            this.showAuthenticatedUI();
        } else {
            this.showUnauthenticatedUI();
        }
    }

    showAuthenticatedUI() {
        const user = auth.getUser();
        if (user) {
            this.elements.userNameDisplay.textContent = user.username;
        }

        this.elements.authForms.classList.add('hidden');
        this.elements.dashboard.classList.remove('hidden');
    }

    showUnauthenticatedUI() {
        this.elements.authForms.classList.remove('hidden');
        this.elements.dashboard.classList.add('hidden');
        this.elements.userMenu.classList.add('hidden');
    }

    // Form Handling
    async handleLogin(e) {
        e.preventDefault();
        const form = e.target;
        
        try {
            const credentials = {
                email: form.loginEmail.value,
                password: form.loginPassword.value
            };

            await auth.login(credentials);
            this.showAuthenticatedUI();
            this.showToast('Logged in successfully', 'success');
            form.reset();
        } catch (error) {
            this.showToast(error.message, 'error');
        }
    }

    async handleRegister(e) {
        e.preventDefault();
        const form = e.target;

        try {
            const userData = {
                username: form.registerUsername.value,
                email: form.registerEmail.value,
                password: form.registerPassword.value
            };

            await auth.register(userData);
            this.showAuthenticatedUI();
            this.showToast('Registered successfully', 'success');
            form.reset();
        } catch (error) {
            this.showToast(error.message, 'error');
        }
    }

    async handleLogout() {
        try {
            await auth.logout();
            this.showUnauthenticatedUI();
        } catch (error) {
            this.showToast(error.message, 'error');
        }
    }

    // Form Toggle
    toggleForms(show) {
        const loginForm = this.elements.loginForm;
        const registerForm = this.elements.registerForm;

        if (show === 'register') {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        } else {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        }
    }

    // Theme Management
    setupTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        theme.applyTheme(savedTheme === 'dark');
    }

    toggleTheme() {
        theme.toggleTheme();
        const icon = this.elements.themeToggle.querySelector('.material-icons');
        const currentTheme = localStorage.getItem('theme') || 'light';
        icon.textContent = currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
    }

    // User Menu
    handleUserMenuClick(e) {
        const userMenu = this.elements.userMenu;
        const isUserMenuButton = e.target.closest('.user-menu-button');
        const isInsideMenu = e.target.closest('.user-menu');

        if (isUserMenuButton) {
            userMenu.classList.toggle('hidden');
        } else if (!isInsideMenu && !userMenu.classList.contains('hidden')) {
            userMenu.classList.add('hidden');
        }
    }

    // Toast Notifications
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <span class="material-icons">${type === 'success' ? 'check_circle' : 'error'}</span>
            <span>${message}</span>
        `;

        this.elements.toastContainer.appendChild(toast);

        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

// Create and export UI instance
const ui = new UIService();
window.ui = ui; // Make it accessible globally 