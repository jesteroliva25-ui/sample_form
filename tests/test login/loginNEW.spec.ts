import { test, expect} from '@playwright/test';
import { test1, test2, test345, loginData } from './logintestelement';
  

test('test', async ({ page }) => {
  const test1Instance = new test1();
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  for (const [index, loginelement] of test1Instance.loginElements.entries()) {
  await page.getByRole(test1Instance.loginTypes[index], { name: loginelement }).fill(test1Instance.textboxData[index]);
}
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(10000);
  await page.close();       
});

test('test2', async ({ page }) => {
  const test2Instance = new test2();
  await page.goto('https://practicetestautomation.com/practice-test-login/');
 for (const loginelement of test2Instance.loginDetails) {
  await page.getByRole(loginelement.type, { name: loginelement.name }).fill(loginelement.value);
}
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(10000);
  await page.close(); 
});

test('test3', async ({ page }) => {
     await page.goto('https://practicetestautomation.com/practice-test-login/');
  const loginDataInstance = new loginData();
  const test345Instance = new test345();
  for (const loginelement of test345Instance.loginTestArray) {
    if (loginelement.type === 'textboxUsername') {
      await page.getByRole('textbox', { name: loginelement.name }).fill(loginDataInstance.textBoxUsername);
    }
    else if (loginelement.type === 'textboxPassword') {
      await page.getByRole('textbox', { name: loginelement.name }).fill(loginDataInstance.textBoxPassword);
    }
  }
   await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(10000);
  await page.close(); 
});

test('test4', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  const test345Instance = new test345();
  const loginDataInstance = new loginData();
  for (const loginelement of test345Instance.loginTestArray) {
    switch (loginelement.type) {
      case 'textboxUsername':
        await page.getByRole('textbox', { name: loginelement.name }).fill(loginDataInstance.textBoxUsername);
        break;
      case 'textboxPassword':
        await page.getByRole('textbox', { name: loginelement.name }).fill(loginDataInstance.textBoxPassword);
        break;
    }
  }
   await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(10000);
  await page.close(); 
});


