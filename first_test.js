import { Selector } from 'testcafe'
import { faker } from '@faker-js/faker';
fixture`Getting Started`
    .page`https://www.demoblaze.com/`


test('Valid Signup test', async t => {
    await t.click("#signin2");
    await t.typeText("#sign-username", faker.name.fullName());
    await t.typeText("#sign-password", faker.internet.password());
    //await t.click(Selector("button").withText("Sign up"));
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("button")
            .withText("Sign up"));
    //await t.debug();
});

test('Valid Login test', async t => {
    await t.click("#login2");
    await t.typeText("#loginusername", "Jamil Rayhan");
    await t.typeText("#loginpassword", "Jamil");
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("button").withText("Log in"));
    await t.click("#nameofuser");

    //await t.debug();
});
test('Contact test', async t => {
    await t
        .click(Selector("a").withText("Contact"));
    await t.typeText("#recipient-email", "abc@gmail.com");
    await t.typeText("#recipient-name", "Rahim");
    await t.typeText("#message-text", "Hi I am Rahim");
    await t.setNativeDialogHandler(() => true).click(Selector("button").withText("Send message"));

    //await t.debug();
});
test('About test', async t => {
    await t.click(Selector("a").withText("About us"));
    await t.setNativeDialogHandler(() => true).click(Selector("button").withText("Play Video"));

    //await t.debug();
});

test('Add item to cart', async t => {
    const product = Selector('.card-title').nth(0);
    await t.click(Selector("a").withText("Samsung galaxy s6"));
    await t.setNativeDialogHandler(() => true).click(Selector("a").withText("Add to cart"));
    await t.click(Selector('#cartur').withText("Cart"));
    // const itemName = Selector('td').withText("Samsung galaxy s6");
    // await t.expect(itemName.innerText).contains(product.innerText);
    await t.debug();
});
