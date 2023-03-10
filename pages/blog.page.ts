import {Locator, Page} from '@playwright/test'

class BlogPage {
    page: Page;
    listOfRecentPosts: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.listOfRecentPosts = page.locator('#recent-posts-3 ul li')
    }

    async navigate() {
        await this.page.goto('/blog')
    }

    async getListOfPosts() {
        return await this.listOfRecentPosts.elementHandles();
    }
}

export default BlogPage;