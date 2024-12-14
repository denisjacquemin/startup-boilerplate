class App {
    constructor() {
        this.init();
    }

    init() {
        // Initialize services
        this.initializeServices();
        
        // Set up global error handling
        this.setupErrorHandling();
        
        // Load initial data if authenticated
        this.loadInitialData();
    }

    initializeServices() {
        // Services are already initialized in their respective files
        // This method can be used for any additional service initialization
        console.log('Application initialized');
    }

    setupErrorHandling() {
        window.onerror = (message, source, lineno, colno, error) => {
            console.error('Global error:', { message, source, lineno, colno, error });
            ui.showToast('An unexpected error occurred', 'error');
        };

        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled promise rejection:', event.reason);
            ui.showToast('An unexpected error occurred', 'error');
        });
    }

    async loadInitialData() {
        if (auth.isAuthenticated()) {
            try {
                // Fetch current user data
                const userData = await api.getCurrentUser();
                auth.setUser(userData.data);

                // Update UI with user data
                this.updateDashboard(userData.data);
            } catch (error) {
                console.error('Error loading initial data:', error);
                if (error.message.includes('unauthorized')) {
                    auth.logout();
                }
            }
        }
    }

    updateDashboard(user) {
        const dashboardContent = document.querySelector('.dashboard-content');
        if (!dashboardContent) return;

        // Example dashboard content
        dashboardContent.innerHTML = `
            <div class="dashboard-grid">
                <div class="dashboard-card">
                    <h3>Profile Information</h3>
                    <div class="profile-info">
                        <p><strong>Username:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Role:</strong> ${user.role}</p>
                        <p><strong>Last Login:</strong> ${new Date(user.lastLogin).toLocaleString()}</p>
                    </div>
                    <button class="btn-primary" onclick="app.showEditProfile()">Edit Profile</button>
                </div>
                ${user.role === 'admin' ? this.getAdminDashboard() : ''}
            </div>
        `;
    }

    getAdminDashboard() {
        return `
            <div class="dashboard-card">
                <h3>Admin Panel</h3>
                <div class="admin-actions">
                    <button class="btn-primary" onclick="app.showUserManagement()">Manage Users</button>
                    <button class="btn-primary" onclick="app.showSystemStats()">System Stats</button>
                </div>
            </div>
        `;
    }

    // UI Action Handlers
    showEditProfile() {
        const user = auth.getUser();
        const dashboardContent = document.querySelector('.dashboard-content');
        
        dashboardContent.innerHTML = `
            <div class="dashboard-card">
                <h3>Edit Profile</h3>
                <form id="editProfileForm" class="auth-form">
                    <div class="form-group">
                        <label for="editUsername">Username</label>
                        <input type="text" id="editUsername" value="${user.username}" class="input">
                    </div>
                    <div class="form-group">
                        <label for="editEmail">Email</label>
                        <input type="email" id="editEmail" value="${user.email}" class="input">
                    </div>
                    <button type="submit" class="btn-primary">Save Changes</button>
                    <button type="button" class="btn-secondary" onclick="app.loadInitialData()">Cancel</button>
                </form>
            </div>
        `;

        // Set up form submission
        document.getElementById('editProfileForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const updatedData = {
                    username: e.target.editUsername.value,
                    email: e.target.editEmail.value
                };

                await auth.updateProfile(updatedData);
                ui.showToast('Profile updated successfully', 'success');
                this.loadInitialData();
            } catch (error) {
                ui.showToast(error.message, 'error');
            }
        });
    }

    async showUserManagement() {
        try {
            const response = await api.getAllUsers();
            const users = response.data;

            const dashboardContent = document.querySelector('.dashboard-content');
            dashboardContent.innerHTML = `
                <div class="dashboard-card">
                    <h3>User Management</h3>
                    <div class="user-list">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${users.map(user => `
                                    <tr>
                                        <td>${user.username}</td>
                                        <td>${user.email}</td>
                                        <td>${user.role}</td>
                                        <td>${user.isActive ? 'Active' : 'Inactive'}</td>
                                        <td>
                                            <button class="btn-icon" onclick="app.editUser('${user._id}')">
                                                <span class="material-icons">edit</span>
                                            </button>
                                            <button class="btn-icon" onclick="app.deleteUser('${user._id}')">
                                                <span class="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    <button class="btn-primary" onclick="app.loadInitialData()">Back to Dashboard</button>
                </div>
            `;
        } catch (error) {
            ui.showToast(error.message, 'error');
        }
    }

    async showSystemStats() {
        const dashboardContent = document.querySelector('.dashboard-content');
        dashboardContent.innerHTML = `
            <div class="dashboard-card">
                <h3>System Statistics</h3>
                <div class="stats-grid">
                    <div class="stat-card">
                        <h4>Total Users</h4>
                        <p class="stat-value">Loading...</p>
                    </div>
                    <div class="stat-card">
                        <h4>Active Sessions</h4>
                        <p class="stat-value">Loading...</p>
                    </div>
                    <div class="stat-card">
                        <h4>System Status</h4>
                        <p class="stat-value">Online</p>
                    </div>
                </div>
                <button class="btn-primary" onclick="app.loadInitialData()">Back to Dashboard</button>
            </div>
        `;

        // In a real application, you would fetch actual statistics here
        try {
            const response = await api.getAllUsers();
            document.querySelector('.stat-value').textContent = response.count;
        } catch (error) {
            ui.showToast(error.message, 'error');
        }
    }

    async editUser(userId) {
        try {
            const response = await api.getUser(userId);
            const user = response.data;

            const dashboardContent = document.querySelector('.dashboard-content');
            dashboardContent.innerHTML = `
                <div class="dashboard-card">
                    <h3>Edit User</h3>
                    <form id="editUserForm" class="auth-form">
                        <div class="form-group">
                            <label for="editUsername">Username</label>
                            <input type="text" id="editUsername" value="${user.username}" class="input">
                        </div>
                        <div class="form-group">
                            <label for="editEmail">Email</label>
                            <input type="email" id="editEmail" value="${user.email}" class="input">
                        </div>
                        <div class="form-group">
                            <label for="editRole">Role</label>
                            <select id="editRole" class="input">
                                <option value="user" ${user.role === 'user' ? 'selected' : ''}>User</option>
                                <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Admin</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>
                                <input type="checkbox" id="editIsActive" ${user.isActive ? 'checked' : ''}>
                                Active
                            </label>
                        </div>
                        <button type="submit" class="btn-primary">Save Changes</button>
                        <button type="button" class="btn-secondary" onclick="app.showUserManagement()">Cancel</button>
                    </form>
                </div>
            `;

            document.getElementById('editUserForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                try {
                    const updatedData = {
                        username: e.target.editUsername.value,
                        email: e.target.editEmail.value,
                        role: e.target.editRole.value,
                        isActive: e.target.editIsActive.checked
                    };

                    await api.updateUser(userId, updatedData);
                    ui.showToast('User updated successfully', 'success');
                    this.showUserManagement();
                } catch (error) {
                    ui.showToast(error.message, 'error');
                }
            });
        } catch (error) {
            ui.showToast(error.message, 'error');
        }
    }

    async deleteUser(userId) {
        if (confirm('Are you sure you want to delete this user?')) {
            try {
                await api.deleteUser(userId);
                ui.showToast('User deleted successfully', 'success');
                this.showUserManagement();
            } catch (error) {
                ui.showToast(error.message, 'error');
            }
        }
    }
}

// Create and export App instance
const app = new App();
window.app = app; // Make it accessible globally 