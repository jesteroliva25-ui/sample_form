//https://practicetestautomation.com/logged-in-successfully/
//https://practicetestautomation.com/practice-test-login/


import { test, expect } from '@playwright/test';
import { loginElements, loginUrls, loginData, button, loginAssertions, incorrectUsernameAssertions, incorrectPasswordAssertions, incorrectUsernameSteps, incorrectPasswordSteps } from './loginElements';

//let username = "student"
//const LoginElement = new loginElements();
const LoginUrl = new loginUrls();
const LoginData = new loginData();
const Button = new button();


test('test', async ({ page }) => {


await page.goto(LoginUrl.LoginUrl);

 

 for (const loginElement of loginElements) {
  switch (loginElement.type) {
  
    case 'textboxUsername':
      await page.getByRole('textbox', { name: loginElement.name }).fill(LoginData.correctUsername);
      break;
    case 'textboxPassword':
      await page.getByRole('textbox', { name: loginElement.name }).fill(LoginData.correctPassword);
      break;
 }
}
  await page.getByRole('button', { name: Button.submitButtonElement }).click();
  await loginAssertions(page);
  await incorrectUsernameSteps;
  await incorrectPasswordSteps;



});


