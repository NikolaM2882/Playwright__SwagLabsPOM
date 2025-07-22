import {expect,Locator, Page} from '@playwright/test'

export class MainPage{

    readonly page:Page
    readonly productsLabel: Locator
    readonly addToCartButton: Locator
    readonly shoppingCart: Locator
    readonly prodctTitle : Locator

    constructor (page:Page){
        this.page = page
        this.productsLabel=page.locator('.title')
        this.addToCartButton = page.locator('.btn.btn_primary.btn_small.btn_inventory')
        this.shoppingCart = page.locator('#shopping_cart_container')
        this.prodctTitle = page.locator('div[data-test="inventory-item-name"]')
    }

}