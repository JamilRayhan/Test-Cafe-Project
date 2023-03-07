import { Selector, t } from "testcafe";

export default class AboutPage {
  constructor() {
    this.aboutUsLink = Selector("a").withText("About us");
    this.playVideoButton = Selector("button").withText("Play Video");
  }

  async goToAboutPage() {
    await t.click(this.aboutUsLink);
  }

  async playVideo() {
    await t.setNativeDialogHandler(() => true).click(this.playVideoButton);
  }
}
