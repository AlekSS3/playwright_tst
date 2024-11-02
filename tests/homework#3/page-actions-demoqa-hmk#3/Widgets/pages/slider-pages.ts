import{expect, type Locator, type Page} from '@playwright/test';

export class SliderPage{
    readonly page: Page;
    readonly slider: Locator;
    readonly sliderValue: Locator;

   

    constructor (page:Page){
        this.page=page;
        this.slider = page.locator('input[type="range"]');
        this.sliderValue = page.locator('span.value');
    }

    async goto(){
        await this.page.goto('https://demoqa.com');
    }

    async setSliderValue(value: number) {
        await this.slider.fill(value.toString());
    }

    async setSliderValueTo14() {
        await this.setSliderValue(14);
    }

    async setSliderValueTo1() {
        await this.setSliderValue(1);
    }

    async setSliderValueTo142() {
        await this.setSliderValue(142);
    }

    async setSliderValueTo38() {
        await this.setSliderValue(38);
    }

    async setSliderValueTo72() {
        await this.setSliderValue(72);
    }

    async setSliderValueTo95() {
        await this.setSliderValue(95);
    }
    
    async clickSliderValue() {
        await this.sliderValue.click();
    }

    async fillSliderValue(value: number) {
        await this.sliderValue.fill(value.toString()); // Fill the value display with the specified value
    }

    async doubleClickSliderValue() {
        await this.sliderValue.dblclick(); // Double-click the slider value display
    }

    async adjustSlider(value: number) {
        await this.setSliderValue(value); // Set the slider to a specific value
        await this.clickSliderValue(); // Click the slider value display
        await this.doubleClickSliderValue(); // Double-click the value display
    }
    
}