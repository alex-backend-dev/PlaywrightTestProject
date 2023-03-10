import {Locator, Page} from '@playwright/test'

class ContactPage {
    page: Page;
    contactNameInput: Locator;
    contactEmailInput: Locator;
    contactPhoneInput: Locator;
    contactMessageTextArea: Locator;
    submitBtn: Locator;
    successfullMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactNameInput = page.locator('.contact-name input')
        this.contactEmailInput = page.locator('.contact-email input')
        this.contactPhoneInput = page.locator('.contact-phone input')
        this.contactMessageTextArea = page.locator('.contact-message textarea')
        this.submitBtn = page.locator('button[type=submit]')
        this.successfullMessage = page.locator('//div[@role = "alert"]')
    }

    async navigate() {
        await this.page.goto('/contact')
    }

    async submitForm(name: string, email: string, phone: string, message: string) {
        await this.contactNameInput.fill(name);
        await this.contactEmailInput.fill(email);
        await this.contactPhoneInput.fill(phone);
        await this.contactMessageTextArea.fill(message);
        await this.submitBtn.click();
    }
}

export default ContactPage;