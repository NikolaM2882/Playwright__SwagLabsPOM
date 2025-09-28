import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'

test.describe('Login fucntionality', () => {
let loginPage: LoginPage
let mainPage: MainPage

    test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    mainPage = new MainPage(page)



    await loginPage.goToLoginPage()
} )

    test('User can log in', async ({page}) => {
    await loginPage.inputUsername('standard_user')
    await loginPage.inputPassword('secret_sauce')
    await loginPage.clickOnLoginButton()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(mainPage.productsLabel).toBeVisible()

    

    
})

    test('User cant login with blank creditentials', async ({page}) => {
    await loginPage.usernameFiled.clear()
    await loginPage.passwrodFiled.clear()
    await loginPage.clickOnLoginButton()

    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await expect(loginPage.usernameFiled).toBeVisible()



})

    test('User cant login with blank username', async ({page}) => {
    await loginPage.usernameFiled.clear()
    await loginPage.passwrodFiled.clear()
    await loginPage.passwrodFiled.fill('secret_sauce')
    await loginPage.clickOnLoginButton()

    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await expect(loginPage.usernameFiled).toBeVisible()


})

    test ('User cant login with blank password', async ({page}) => {
    await loginPage.usernameFiled.clear()
    await loginPage.passwrodFiled.clear()
    await loginPage.usernameFiled.fill('standard_user')
    await loginPage.clickOnLoginButton()

    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await expect(loginPage.usernameFiled).toBeVisible()

})



})