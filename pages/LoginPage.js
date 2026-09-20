const BasePage = require('../utils/BasePage');

class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.username = page.getByPlaceholder('Username');

        this.password = page.getByPlaceholder('Password');

        this.loginButton = page.getByRole('button', {
            name: 'Login'
        });

        this.loginError = page.locator(
            '.oxd-alert-content-text'
        );
    }

    async login(user) {

        await this.fill(this.username, user.username);

        await this.fill(this.password, user.password);

        await this.click(this.loginButton);
    }
}

module.exports = LoginPage;

 