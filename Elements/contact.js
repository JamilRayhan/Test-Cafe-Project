import { Selector, t } from 'testcafe';

export default class ContactPage {
  constructor() {
    this.recipientEmailInput = Selector('#recipient-email');
    this.recipientNameInput = Selector('#recipient-name');
    this.messageInput = Selector('#message-text');
    this.sendMessageButton = Selector('button').withText('Send message');
  }

  async fillRecipientEmail(email) {
    await t.typeText(this.recipientEmailInput, email);
  }

  async fillRecipientName(name) {
    await t.typeText(this.recipientNameInput, name);
  }

  async fillMessage(message) {
    await t.typeText(this.messageInput, message);
  }

  async sendMessage() {
    await t
      .setNativeDialogHandler(() => true)
      .click(this.sendMessageButton);
  }
}
