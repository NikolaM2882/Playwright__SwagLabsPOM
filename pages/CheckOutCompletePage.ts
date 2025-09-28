import {expect, Locator, Page} from '@playwright/test'

export class CheckOutCompletePage{

    readonly page: Page
    readonly backhomeButton: Locator

    constructor (page:Page){
        this.page = page
        this.backhomeButton = page.locator('#back-to-products')
    }

    
}