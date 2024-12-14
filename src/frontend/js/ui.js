class UI {
    constructor() {
        this.setupEventListeners();
        this.initializeUI();
    }

    initializeUI() {
        // Show landing page by default
        this.showLandingPage();
        
        // Ensure Sign In button is hidden by default in auth section
        document.getElementById('topLoginBtn')?.classList.add('hidden');
        document.getElementById('topRegisterBtn')?.classList.remove('hidden');
    }

    setupEventListeners() {
        // Logo links
        document.getElementById('logoLink')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showLandingPage();
        });
        document.getElementById('authLogoLink')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showLandingPage();
        });

        // Landing page buttons
        document.getElementById('landingSignIn')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAuthForms('login');
        });
        document.getElementById('landingSignUp')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAuthForms('register');
        });

        // Top bar buttons
        document.getElementById('topLoginBtn')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAuthForms('login');
        });
        document.getElementById('topRegisterBtn')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAuthForms('register');
        });

        // Auth form links
        document.getElementById('showRegister')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAuthForms('register');
        });
        document.getElementById('showLogin')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAuthForms('login');
        });
        document.getElementById('showForgotPassword')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAuthForms('forgot');
        });
        document.getElementById('backToLogin')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAuthForms('login');
        });

        // Theme toggles
        document.getElementById('themeToggle')?.addEventListener('click', () => this.toggleTheme());
        document.getElementById('landingThemeToggle')?.addEventListener('click', () => this.toggleTheme());
    }

    showLandingPage() {
        document.getElementById('landingPage')?.classList.remove('hidden');
        document.getElementById('authSection')?.classList.add('hidden');
    }

    showAuthForms(form = 'login') {
        document.getElementById('landingPage')?.classList.add('hidden');
        document.getElementById('authSection')?.classList.remove('hidden');

        // Hide all forms first
        document.querySelectorAll('.auth-form').forEach(form => form.classList.add('hidden'));

        // Show the requested form
        console.log(form);
        switch (form) {
            case 'register':
                document.getElementById('registerForm')?.classList.remove('hidden');
                // Show only login button in top bar
                document.getElementById('topRegisterBtn')?.classList.add('hidden');
                document.getElementById('topLoginBtn')?.classList.remove('hidden');
                break;
            case 'forgot':
                document.getElementById('forgotPasswordForm')?.classList.remove('hidden');
                // Show only login button in top bar
                document.getElementById('topRegisterBtn')?.classList.add('hidden');
                document.getElementById('topLoginBtn')?.classList.remove('hidden');
                break;
            case 'login':
                console.log('removin login btn', document.getElementById('topLoginBtn'));
                document.getElementById('loginForm')?.classList.remove('hidden');
                // Show only register button in top bar
                document.getElementById('topRegisterBtn')?.classList.remove('hidden');
                document.getElementById('topLoginBtn')?.classList.add('hidden');
        }
    }

    toggleTheme() {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
}

const ui = new UI();