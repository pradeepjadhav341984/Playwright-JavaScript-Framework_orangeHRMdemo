const { expect } = require('@playwright/test');

class DashboardPage {

    constructor(page) {
        this.page = page;
        this.dashboardTitle = page.getByRole('heading', { name: 'Dashboard' });
        this.usermenu = page.locator('.oxd-userdropdown');
        this.logoutLink = page.getByText('Logout');
    }

    async verifyDashboard() {
        await expect(this.dashboardTitle).toHaveText('Dashboard');
    }

    async logout() {
        await this.usermenu.click();
        await this.logoutLink.click();
    }
}

module.exports = DashboardPage;