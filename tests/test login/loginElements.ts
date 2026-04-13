import { expect, Page } from '@playwright/test';

export class loginData{
correctUsername = 'student';
correctPassword = 'Password123';
incorrectUsername = 'studentfail';
incorrectPassword = 'passwordfail';

}


export class loginUrls{
LoginUrl = 'https://practicetestautomation.com/practice-test-login/';
HomeUrl = 'https://practicetestautomation.com/logged-in-successfully/';

}

//const loginUrl = ['https://practicetestautomation.com/practice-test-login/', 'https://practicetestautomation.com/logged-in-successfully/'];

export const loginElements = [
{
    type: 'textboxIncorrectUsername',
    name: 'username',
},
{
    type: 'textboxIncorrectPassword',
    name: 'password',
},
{
    type: 'textboxUsername',
    name: 'username',
},
{
    type: 'textboxPassword',
    name: 'password',
}];


export class button {
 submitButtonElement = 'Submit';
}
//errorMessageElement = '#error';

export async function loginAssertions(page: Page){
  const loginUrl = new loginUrls();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page).toHaveURL(loginUrl.LoginUrl);
}

export async function incorrectUsernameAssertions(page: Page){
  await expect(page.locator('#error')).toContainText('Your username is invalid!');
  await expect(page.locator('#error')).toBeVisible();
  
}

export async function incorrectPasswordAssertions(page: Page){
  await expect(page.locator('#error')).toContainText('Your password is invalid!');
  await expect(page.locator('#error')).toBeVisible();
}

export async function incorrectUsernameSteps(page: Page, assertionType: string){
        const LoginData = new loginData();
        const Button = new button();
        await page.getByRole('textbox', { name: 'username' }).fill(LoginData.incorrectUsername);
        await page.getByRole('textbox', { name: 'password' }).fill(LoginData.correctPassword); 
        await page.getByRole('button', { name: Button.submitButtonElement }).click();
        await incorrectUsernameAssertions(page);
          
}

export async function incorrectPasswordSteps(page: Page, assertionType: string){
      const LoginData = new loginData();
      const Button = new button();
      await page.getByRole('textbox', { name: 'username' }).fill(LoginData.correctUsername);
      await page.getByRole('textbox', { name: 'password' }).fill(LoginData.incorrectPassword);
      await page.getByRole('button', { name: Button.submitButtonElement }).click();
      await incorrectPasswordAssertions(page);
      
}