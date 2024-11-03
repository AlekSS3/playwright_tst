import{expect, type Locator, type Page} from '@playwright/test';

export class BooksPage{
    readonly page: Page;
    readonly heading: Locator;
    readonly bookStoreLink: Locator;
    readonly searchInput: Locator;
    readonly bookLink: Locator;
    
  

    constructor (page:Page){
        this.page=page;
        this.heading = page.locator('h5:has-text("Book Store Application")');
        this.bookStoreLink = page.locator('a:has-text("Book Store")'); 
        this.searchInput = page.locator('input[placeholder="Type to search"]'); 
        this.bookLink = page.locator('a:has-text("Speaking JavaScript")');
    
    }

    async goTo() {
        await this.page.goto('https://demoqa.com');
    }

    async clickHeading() {
        await this.heading.click();
    }

    async clickBookStoreLink() {
        await this.bookStoreLink.click();
    }

    async fillSearchInput(bookName: string) {
        await this.searchInput.fill(bookName);
    }

    async clickBookLink() {
        await this.bookLink.click();
    }
}
