import { Selector } from "testcafe";
import { faker } from "@faker-js/faker";
import SignUpPage from "./Elements/signup";
import LoginPage from "./Elements/login";
import ContactPage from "./Elements/contact";
import AboutPage from "./Elements/about";
import AddToCartPage from "./Elements/addtoCart";
fixture`Getting Started`.page`https://www.demoblaze.com/`;

const name = faker.name.fullName();
const pass = faker.internet.password();

test("Valid Signup test", async (t) => {
  const signUpPage = new SignUpPage();
  await signUpPage.signUp(name, pass);
});

test("Valid Login test", async (t) => {
    const loginPage = new LoginPage();
    await loginPage.login(name, pass);
});
test("Contact test", async (t) => {
    const contactPage = new ContactPage();
    
    const email = faker.internet.email();
    const name = faker.name.fullName();
    const message = faker.lorem.sentence();
  
    await t.click(Selector("a").withText("Contact"));
    await contactPage.fillRecipientEmail(email);
    await contactPage.fillRecipientName(name);
    await contactPage.fillMessage(message);
    await contactPage.sendMessage();
});
test("About test", async (t) => {
    const aboutPage = new AboutPage();
  
    await aboutPage.goToAboutPage();
    await aboutPage.playVideo();
});

test('Add item to cart', async t => {
    const addToCartPage = new AddToCartPage();
  
    await t.click(Selector("a").withText("Samsung galaxy s6"));
    await addToCartPage.addItemToCart();
    await addToCartPage.navigateToCart();
    await addToCartPage.verifyItemInCart('Samsung galaxy s6');
    //await t.debug();
});