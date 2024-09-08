const { test, expect } = require('@playwright/test');

test('Verify Reading Page', async ({ page }) => {

  await test.step('I navigate to reading page for S0889159123003732', async () => {
    await page.goto('https://www.sciencedirect.com/science/article/pii/S0889159123003732');
  });

  await test.step('The title of the reading page contain the below data', async () => {
    const title = await page.title();
    expect(title).toContain('ScienceDirect');
  });

});

// test(`Verify "show full outline" button is clickable`, async ({ page }) => {

//   await test.step('I navigate to reading page for S0889159123003732', async () => {
//     await page.goto('https://www.sciencedirect.com/science/article/pii/S0889159123003732');
//   });

//   await test.step(`I click on the "Show full outline" button in the outline table`, async () => {
//     await page.getByRole('button', { name: 'Show full outline' }).click()
//   });

//   await test.step(`Then i can see the rest of the data in the outline table `, async () => {
//     await expect(page.locator('[href="#s0020"]')).toBeVisible();
//   });
// });