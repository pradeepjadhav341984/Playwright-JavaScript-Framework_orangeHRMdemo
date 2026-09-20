 class LoginPage{
    constructor(page)
    {
        this.username = page.locator("input[name='username']");
        this.password = page.locator("input[name='password']");
        this.loginButton=page.getByRole('button',{name:'Login'});
        this.loginError=page.getByText('Invalid credentials');
    }
    async login(user)
    {
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.loginButton.click();

    }
    async invalidlogin(username,password)
    {
         await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
   
}
 module.exports=LoginPage;