import { Selector, t } from 'testcafe';

export default class AddToCartPage {
  constructor() {
    this.addToCartButton = Selector('a').withText('Add to cart');
    this.cartButton = Selector('#cartur').withText('Cart');
    this.itemName = Selector('#tbodyid');
  }

  async addItemToCart() {
    await t.setNativeDialogHandler(() => true).click(this.addToCartButton);
  }

  async navigateToCart() {
    await t.click(this.cartButton);
  }

  async verifyItemInCart(itemName) {
    await t.expect(this.itemName.innerText).contains(itemName);
  }
}
