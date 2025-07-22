import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'
import { AddToCartPage } from '../pages/AddToCartPage'

test.describe('Add to cart functionality',() => {
    let loginPage : LoginPage
    let mainPage : MainPage
    let cartPage : AddToCartPage

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        mainPage = new MainPage(page)
        cartPage = new AddToCartPage(page)


        await loginPage.goToLoginPage()
    })

    test('User is able to add to cart an item', async ({page}) => {
            await loginPage.inputUsername('standard_user')
            await loginPage.inputPassword('secret_sauce')
            await loginPage.clickOnLoginButton()

            await mainPage.addToCartButton.nth(0).click()
            const exactText = await mainPage.prodctTitle.nth(0).innerText()
            await mainPage.shoppingCart.click()


            await expect(cartPage.removeButton).toBeVisible
            await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
            await expect(cartPage.productTitle).toHaveText(exactText)
    })

    test('User is able to add to cart multiple items', async ({page}) => {
            await loginPage.inputUsername('standard_user')
            await loginPage.inputPassword('secret_sauce')
            await loginPage.clickOnLoginButton()

            await mainPage.addToCartButton.nth(0).click()
            await mainPage.addToCartButton.nth(2).click()

            const exactText = await mainPage.prodctTitle.nth(0).innerText()
            const exactText2 = await mainPage.prodctTitle.nth(2).innerText()

            await mainPage.shoppingCart.click()


            await expect(cartPage.removeButton).toBeVisible
            await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
            await expect(cartPage.productTitle.nth(0)).toHaveText(exactText)
            await expect(cartPage.productTitle.nth(1)).toHaveText(exactText2)

    })
})