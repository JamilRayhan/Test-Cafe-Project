import { Selector, t } from 'testcafe';

export default class SignUpPage {
  constructor() {
    this.signInButton = Selector('#signin2');
    this.usernameField = Selector('#sign-username');
    this.passwordField = Selector('#sign-password');
    this.signUpButton = Selector('button').withText('Sign up');
  }

  async signUp(username, password) {
    await t.click(this.signInButton);
    await t.typeText(this.usernameField, username);
    await t.typeText(this.passwordField, password);
    await t
      .setNativeDialogHandler(() => true)
      .click(this.signUpButton);
  }
}
