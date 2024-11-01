import{expect, type Locator, type Page} from '@playwright/test';

export class CheckboxPage{
    readonly page: Page;
    readonly expandButton: Locator;
    readonly collapseButton: Locator;
    readonly toggleButton: Locator;
    readonly homeButton: Locator;
    readonly treeButton: Locator;
    readonly downloadsToggle: Locator;
    readonly documentsToggle: Locator;
    readonly desktopToggle: Locator;
    readonly decktopBox: Locator;
   

    constructor (page:Page){
        //this.page=page;
       // this.=page.locator('#doubleClickBtn');
       //this.expandButton = page.locator('svg path:nth-of-type(1)');
        this.expandButton = page.locator('path[d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"]');
        this.collapseButton = page.locator('path[d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"]');
        this.toggleButton = page.locator('path[d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]');
        this.homeButton = page.locator('span.rct-title', { hasText: 'Home' });
        this.treeButton = page.locator('svg.rct-icon.rct-icon-uncheck');
        this.downloadsToggle = page.locator('svg path[d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]');
        this.documentsToggle = page.locator('svg path[d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"]');
        this.desktopToggle = page.locator('svg path[d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]');
        this.desktopBox = page.locator('svg.rct-icon.rct-icon-uncheck');

    };

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async clickExpandButton(){
        await this.expandButton.click();
    }

    async clickCollapseButton(){
        await this.collapseButton.click();
    }

    async clickToggleButton(){
       await this.toggleButton.click();
    }

    async clickHomeButton(){
        await this.homeButton.click();
    }

    async clickTreeButton(){
        await this.treeButton.click();
    }
    
    async clickDownloadsToggle(){
        await this.downloadsToggle.click();
    }

    async clickDocumentsToggle(){
        await this.documentsToggle.click();
    }

    async clickDesktopToggle(){
        await this.desktopToggle.click();
    }





};