import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.loginLink = Selector("#login2");
    this.usernameInput = Selector("#loginusername");
    this.passwordInput = Selector("#loginpassword");
    this.loginButton = Selector("button").withText("Log in");
    this.userProfileLink = Selector("#nameofuser");
  }

  async login(username, password) {
    await t.click(this.loginLink);
    await t.typeText(this.usernameInput, username);
    await t.typeText(this.passwordInput, password);
    await t.setNativeDialogHandler(() => true).click(this.loginButton);
    await t.click(this.userProfileLink);
  }
}

export default LoginPage;
