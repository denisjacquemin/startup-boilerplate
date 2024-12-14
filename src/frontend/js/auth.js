class AuthService {
    constructor() {
        this.tokenKey = 'accessToken';
        this.refreshTokenKey = 'refreshToken';
        this.userKey = 'user';
        this.init();
    }

    init() {
        // Set initial auth state
        const token = this.getToken();
        if (token) {
            api.setAuthToken(token);
        }

        // Set up token refresh interval
        this.setupTokenRefresh();
    }

    // Token management
    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    getRefreshToken() {
        return localStorage.getItem(this.refreshTokenKey);
    }

    setTokens(accessToken, refreshToken) {
        localStorage.setItem(this.tokenKey, accessToken);
        localStorage.setItem(this.refreshTokenKey, refreshToken);
        api.setAuthToken(accessToken);
    }

    clearTokens() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.refreshTokenKey);
        localStorage.removeItem(this.userKey);
        api.setAuthToken(null);
    }

    // User management
    getUser() {
        const userStr = localStorage.getItem(this.userKey);
        return userStr ? JSON.parse(userStr) : null;
    }

    setUser(user) {
        localStorage.setItem(this.userKey, JSON.stringify(user));
    }

    // Auth state
    isAuthenticated() {
        return !!this.getToken();
    }

    // Token refresh
    setupTokenRefresh() {
        // Check token every minute
        setInterval(async () => {
            if (this.isAuthenticated()) {
                try {
                    await this.refreshToken();
                } catch (error) {
                    console.error('Token refresh failed:', error);
                    this.logout();
                }
            }
        }, 60000);
    }

    async refreshToken() {
        const refreshToken = this.getRefreshToken();
        if (!refreshToken) return;

        try {
            const response = await api.refreshToken(refreshToken);
            this.setTokens(response.accessToken, response.refreshToken);
            return response;
        } catch (error) {
            this.clearTokens();
            throw error;
        }
    }

    // Auth actions
    async register(userData) {
        try {
            const response = await api.register(userData);
            this.setTokens(response.accessToken, response.refreshToken);
            this.setUser(response.user);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async login(credentials) {
        try {
            const response = await api.login(credentials);
            this.setTokens(response.accessToken, response.refreshToken);
            this.setUser(response.user);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            if (this.isAuthenticated()) {
                await api.logout();
            }
        } finally {
            this.clearTokens();
            window.location.reload();
        }
    }

    // Profile management
    async updateProfile(userData) {
        try {
            const response = await api.updateProfile(userData);
            this.setUser(response.data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async changePassword(passwordData) {
        try {
            return await api.changePassword(passwordData);
        } catch (error) {
            throw error;
        }
    }
}

// Create and export Auth instance
const auth = new AuthService();
window.auth = auth; // Make it accessible globally 