import {expect,Locator, Page} from '@playwright/test'

export class LoginPage{

readonly page: Page
readonly usernameFiled: Locator
readonly passwrodFiled: Locator
readonly loginButton : Locator
readonly error : Locator

constructor(page: Page) {
    this.page = page
    this.usernameFiled = page.locator('#user-name')
    this.passwrodFiled = page.locator('#password')
    this.loginButton = page.locator('#login-button')
    this.error = page.locator("h3[data-test='error']")


}

async goToLoginPage(){
    await this.page.goto('https://www.saucedemo.com/')

}

async inputUsername(username : string){
    await this.usernameFiled.fill(username)
}

async inputPassword(password : string){
    await this.passwrodFiled.fill(password)
}

async clickOnLoginButton(){
    await this.loginButton.waitFor({ state: 'visible', timeout: 10000 }) // wait up to 10s
    await this.loginButton.click()

}



}