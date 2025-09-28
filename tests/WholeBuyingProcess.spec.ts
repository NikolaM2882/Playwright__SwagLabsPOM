import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'
import { AddToCartPage } from '../pages/AddToCartPage'
import { CheckOutFormPage } from '../pages/CheckOutFormPage'
import { OverviewPage } from '../pages/OverviewPage'
import { CheckOutCompletePage } from '../pages/CheckOutCompletePage'

test.describe('Whole buying process', () => {
    let loginPage : LoginPage
    let mainPage : MainPage
    let addToCartPage : AddToCartPage
    let checkOutFormPage : CheckOutFormPage
    let overviewPage : OverviewPage
    let checkOutCompletePage : CheckOutCompletePage

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        mainPage = new MainPage(page)
        addToCartPage = new AddToCartPage(page)
        checkOutFormPage = new CheckOutFormPage(page)
        overviewPage = new OverviewPage(page)
        checkOutCompletePage = new CheckOutCompletePage(page)

        await loginPage.goToLoginPage()

    })

    test.only('User can go through whole buying process', async ({page})  =>{
          await loginPage.inputUsername('standard_user')
          await loginPage.inputPassword('secret_sauce')
          await loginPage.clickOnLoginButton()

          await mainPage.addToCartButton.nth(0).click()
          await mainPage.shoppingCart.click()
          await addToCartPage.checkOutButton.click()
          
          await checkOutFormPage.insertName('Petar')
          await checkOutFormPage.insertLastName('Petrovic')
          await checkOutFormPage.inserZipCode('11000')
          await checkOutFormPage.continueButton.click()

          await overviewPage.finishButton.click()

          await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
          await expect(checkOutCompletePage.backhomeButton).toBeVisible()



    })



})