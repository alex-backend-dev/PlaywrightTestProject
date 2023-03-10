import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

test.describe('Upload File', () => {
    let cartPage : CartPage

    const fileName = ['Hey.pdf', 'Coke.png']

    for (const name of fileName) {
        test(`Should upload a ${name}`, async ({ page }) => {
            cartPage = new CartPage(page);
    
            //open url
            await page.goto('https://practice.automationbro.com/cart/');
    
            //Provide test file path
            const filePath = path.join(__dirname, `../data/${name}`)
    
            //upload test file
            cartPage.uploadComponent().uploadFile(filePath);
    
            //Assertion
            await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully', {timeout: 20000});
        })
    }

    test.skip('Should upload a test file on a hidden input field', async ({ page }) => {
        //open url
        await page.goto('https://practice.automationbro.com/cart/');

        //Provide test file path
        const filePath = path.join(__dirname, '../data/Coke.png')

        //DOM manipulation
        await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
                selector.className = '';
            }
        })

        //Upload test file
        await page.setInputFiles('input#upfile_1', filePath); //throws error

        //Click the submit button
        await page.locator('#upload_1').click();

        //Assertion
        await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully');
    })
    
})
