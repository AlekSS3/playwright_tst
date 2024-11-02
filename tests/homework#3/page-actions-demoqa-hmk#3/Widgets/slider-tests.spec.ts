import { test, expect } from '@playwright/test';

import { SliderPage } from './pages/slider-pages';

test.describe('Test suite for slider', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('https://demoqa.com');
            await page.getByRole('heading', { name: 'Widgets' }).click();
            await page.getByRole('list').getByText('Slider').click();
});

    test('Test for selecting different values on the slider', async ({ page }) => {
           await page.getByRole('slider').fill('14');
           await page.locator('#sliderValue').click();
           await page.locator('#sliderValue').fill('1');
           await page.locator('#sliderValue').dblclick();
           await page.locator('#sliderValue').fill('142');
           await page.getByRole('slider').fill('38');
           await page.locator('#sliderValue').click();
           await page.locator('#sliderValue').dblclick();
           await page.getByRole('slider').fill('72');
           await page.locator('#sliderValue').click();
           await page.getByRole('slider').fill('95');

            //const sliderPage = new SliderPage(page);
            //await sliderPage.setSliderValueTo14();
            //await sliderPage.clickSliderValue();
            //await sliderPage.fillSliderValue(1);
            //await sliderPage.doubleClickSliderValue();
            //await sliderPage.fillSliderValue(142);
            //await sliderPage.adjustSlider(38);
            //await sliderPage.clickSliderValue();
            //await sliderPage.doubleClickSliderValue();
            //await sliderPage.setSliderValue(72);
            //await sliderPage.clickSliderValue();
            //await sliderPage.setSliderValue(95);

    
    });


});