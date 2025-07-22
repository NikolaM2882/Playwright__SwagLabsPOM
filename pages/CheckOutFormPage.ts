import {expect, Locator, Page} from '@playwright/test'

export class CheckOutFormPage{

    readonly page:Page
    readonly inputName : Locator
    readonly inputLastName : Locator
    readonly inputZipCode : Locator
    readonly continueButton : Locator

    constructor (page:Page){
        this.page = page
        this.inputName = page.locator('#first-name')
        this.inputLastName = page.locator('#last-name')
        this.inputZipCode = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')

    }

    async insertName( name : string){
        await this.inputName.fill(name)
    }

    async insertLastName( lastName : string){
        await this.inputLastName.fill(lastName)
    }

    async inserZipCode (zipCode : string){
        await this.inputZipCode.fill(zipCode)
    }
    

}