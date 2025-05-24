import { test, expect } from '@playwright/test';

test('homepage has a heading', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // Assuming the dev server runs on port 3000

  // Check for a heading element, adjust the selector as needed
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText(/Welcome/i); // Adjust text based on your actual heading
}); 