import { test, expect } from '@playwright/test';

test.describe('Test Suites for e-commerce website', () => {

    test.describe('Test Suite for shopping cart tests', () => {

        test.describe("Test Suite for adding products to cart", () => {

            test('Add one product', async ({ page }) => {
            
            });
    
            test('Add multiple products', async ({ page }) => {
            
            });
        });
    
        test.describe("Test Suite for removing products from cart", () => {
    
            test('Remove one product', async ({ page }) => {
            
            });
    
        });  

    });

    test.describe("Test Suite for Sorting Products Tests", () => {

        test.describe("Test Suite for sorting products by name", () => {
    
            test('Sort products from A to Z', async ({ page }) => {
            
            });
    
            test('Sort products from Z to A', async ({ page }) => {
            
            });
        });
    
        test.describe("Test Suite for sorting products by price", () => {
    
            test('Sort products from low to high', async ({ page }) => {
            
            });
    
            test('Sort products from high to low', async ({ page }) => {
            
            });
    
        });
    
        test.describe("Test Suite for sorting products by descending order", () => {
    
            test('Sort products by name from A to Z', async ({ page }) => {
            
            });
    
            test('Sort products with price from low to high', async ({ page }) => {
            
            });
    
        });
    
        test.describe("Test Suite for sorting products by ascending order", () => {
    
            test('Sort products by name from Z to A', async ({ page }) => {
            
            });
    
            test('Sort products with price from high to low', async ({ page }) => {
            
            });
    
        });
    
    
    
    
    });


});