import{expect, type Locator, type Page} from '@playwright/test';

export class DragAndDropPage{
    readonly page: Page;
    readonly doubleClickBtn: Locator;
    readonly draggable: Locator;
    readonly droppable: Locator;
    readonly acceptBtn: Locator;
    readonly notAcceptableField: Locator;
    readonly notAcceptableDropField: Locator;

    

  

    constructor (page:Page){
        this.page=page;
        this.draggable = page.locator('#draggable');
        this.droppable = page.locator('div#droppable').first();
        this.acceptBtn = page.locator('[role="tab"]', { hasText: 'Accept' });
        this.notAcceptableField = page.locator('text=Not Acceptable');
        this.notAcceptableDropField = page.locator('#notAcceptableDropField');

    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async selectDraggable(){
        await this.draggable.click();
    }

    async dragAndDrop() {
        await this.draggable.hover();
        await this.page.mouse.down();
        await this.droppable.hover();
        await this.page.mouse.up();
    }

    async clickAcceptBtn() {
        await this.acceptBtn.click();
    }

    async verifyDragAndDrop() {
        const dropText = await this.droppable.innerText();
        await expect(dropText).toContain('Dropped!');
        await expect(this.draggable).toContainText('Drag me');
    }

    async selectNotAcceptableField() {
        await this.notAcceptableField.click();
    }

    async dragToNotAcceptableDropField() {
        await this.notAcceptableDropField.hover();
        await this.page.mouse.down();
        await this.droppable.hover();
        await this.page.mouse.up();
    }

    async verifyDragToNotAcceptable() {
        await expect(this.droppable).not.toContainText('Dropped!');
    }

    async verifyDragToAcceptable() {
        await expect(this.draggable).toBeVisible();
        const dropText = await this.droppable.innerText();
        await expect(dropText).toContain('Dropped!');
    }

    
}