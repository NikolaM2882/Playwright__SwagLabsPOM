import { Expect, Page, Locator } from "@playwright/test";

export class AddToCartPage{
    
    readonly page:Page
    readonly removeButton : Locator
    readonly productTitle : Locator
    readonly checkOutButton : Locator

    constructor(page:Page){
        this.page = page
        this.removeButton= page.locator('.btn.btn_secondary.btn_small.cart_button')
        this.productTitle = page.locator('.inventory_item_name')
        this.checkOutButton = page.locator('#checkout')

        
        
    }

    

}