class ThemeService {
    constructor() {
        this.themes = {
            slate: {
                light: {
                    background: 'hsl(0 0% 100%)',
                    foreground: 'hsl(222.2 84% 4.9%)',
                    card: 'hsl(0 0% 100%)',
                    cardForeground: 'hsl(222.2 84% 4.9%)',
                    popover: 'hsl(0 0% 100%)',
                    popoverForeground: 'hsl(222.2 84% 4.9%)',
                    primary: 'hsl(222.2 47.4% 11.2%)',
                    primaryForeground: 'hsl(210 40% 98%)',
                    secondary: 'hsl(210 40% 96.1%)',
                    secondaryForeground: 'hsl(222.2 47.4% 11.2%)',
                    muted: 'hsl(210 40% 96.1%)',
                    mutedForeground: 'hsl(215.4 16.3% 46.9%)',
                    accent: 'hsl(210 40% 96.1%)',
                    accentForeground: 'hsl(222.2 47.4% 11.2%)',
                    border: 'hsl(214.3 31.8% 91.4%)',
                    input: 'hsl(214.3 31.8% 91.4%)',
                    ring: 'hsl(222.2 84% 4.9%)'
                },
                dark: {
                    background: 'hsl(222.2 84% 4.9%)',
                    foreground: 'hsl(210 40% 98%)',
                    card: 'hsl(222.2 84% 4.9%)',
                    cardForeground: 'hsl(210 40% 98%)',
                    popover: 'hsl(222.2 84% 4.9%)',
                    popoverForeground: 'hsl(210 40% 98%)',
                    primary: 'hsl(210 40% 98%)',
                    primaryForeground: 'hsl(222.2 47.4% 11.2%)',
                    secondary: 'hsl(217.2 32.6% 17.5%)',
                    secondaryForeground: 'hsl(210 40% 98%)',
                    muted: 'hsl(217.2 32.6% 17.5%)',
                    mutedForeground: 'hsl(215 20.2% 65.1%)',
                    accent: 'hsl(217.2 32.6% 17.5%)',
                    accentForeground: 'hsl(210 40% 98%)',
                    border: 'hsl(217.2 32.6% 17.5%)',
                    input: 'hsl(217.2 32.6% 17.5%)',
                    ring: 'hsl(212.7 26.8% 83.9%)'
                }
            },
            // Add other shadcn/ui color schemes here
        };

        this.init();
    }

    init() {
        // Load theme configuration from environment variables or defaults
        this.loadThemeConfig();
        
        // Apply initial theme
        this.applyTheme();
    }

    loadThemeConfig() {
        // These would typically come from environment variables
        // For now, we'll use defaults
        this.config = {
            base: 'slate',
            radius: '0.5rem',
            primaryColor: 'blue',
            secondaryColor: 'slate',
            accentColor: 'violet'
        };

        // Update CSS custom properties for border radius
        document.documentElement.style.setProperty('--radius', this.config.radius);
    }

    applyTheme(isDark = false) {
        const mode = isDark ? 'dark' : 'light';
        const theme = this.themes[this.config.base][mode];

        // Apply theme colors
        Object.entries(theme).forEach(([key, value]) => {
            const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
            document.documentElement.style.setProperty(cssVar, value);
        });

        // Update body class for dark/light mode
        document.body.className = isDark ? 'theme-dark' : 'theme-light';

        // Store theme preference
        localStorage.setItem('theme', mode);
    }

    toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        this.applyTheme(currentTheme === 'light');
    }

    // Method to update theme configuration
    updateConfig(config) {
        this.config = { ...this.config, ...config };
        this.applyTheme(localStorage.getItem('theme') === 'dark');
    }

    // Method to get current theme configuration
    getConfig() {
        return this.config;
    }
}

// Create and export Theme instance
const theme = new ThemeService();
window.theme = theme; // Make it accessible globally 