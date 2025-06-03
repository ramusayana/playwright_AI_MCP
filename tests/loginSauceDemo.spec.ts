import { test, expect } from '@playwright/test';

test('Successful login to Sauce Demo', async ({ page }) => {
  // Open the browser and navigate to the URL
  await page.goto('https://www.saucedemo.com/');

  // Enter Username
  await page.fill('#user-name', 'standard_user');

  // Enter Password
  await page.fill('#password', 'secret_sauce');

  // Click Login
  await page.click('#login-button');

  // Verify successful login by checking the presence of the inventory page
  await expect(page).toHaveURL(/inventory\.html/);
});
