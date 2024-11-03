import { test, expect } from '@playwright/test';

import { BooksPage } from './pages/book-store-pages';

test('Test to register new user to Book Store', async ({ page }) => {
    await page.goto('https://demoqa.com');
    await page.getByRole('heading', { name: 'Book Store Application' }).click();
    await page.getByText('Book Store', { exact: true }).click();
    await page.getByPlaceholder('Type to search').click();
    await page.getByPlaceholder('Type to search').fill('Spea');
    await page.getByRole('link', { name: 'Speaking JavaScript' }).click();

    //const booksPage = new BooksPage(page);
    //await booksPage.goTo();
    //await booksPage.clickHeading();
    //await booksPage.clickBookStoreLink();
    //await booksPage.fillSearchInput('Spea');
    //await booksPage.clickBookLink();

});