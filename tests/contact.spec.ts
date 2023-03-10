import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import {faker} from '@faker-js/faker';

test.describe('Contact', () => {
    let contactPage: ContactPage;

    test('Fill contact form and verify successfull message', async ({ page }) => {
        contactPage = new ContactPage(page)

        //open contact page
        await contactPage.navigate();
        
        //fill out the input fields and submit
        await contactPage.submitForm(faker.name.firstName(), faker.internet.email(), 
        faker.phone.number(), faker.lorem.paragraph(2));

        //assert successfull message 
        await expect(contactPage.successfullMessage).
        toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })    
})
