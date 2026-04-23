import { Page } from '@playwright/test';

//this file is useless

export class LoginElements {
   username = "username";
   password = "password";
   loginBtn = "Login";
}   

export class LoginData {
    validUsername = "practice";
    validPassword = "SuperSecretPassword!";
    invalidUsername = "incorrectUser";
    invalidPassword = "incorrectPassword";
}

export class assertionElements {
    loginUrl = "https://practice.expandtesting.com/login";
    loggedInUrl = "https://practicetestautomation.com/logged-in-successfully/";
    loginText = "Logged In Successfully";

    logoutURL = "https://practicetestautomation.com/practice-test-login/";
    logoutText = "Log out";
    logoutBtn = "Log out";
}


export class additionalAssertions {
    
}

export async function loginSteps(page) {
 
 const loginElements = new LoginElements();
 const loginData = new LoginData();
 const assertionElement = new assertionElements();

  await page.goto(assertionElement.loginUrl);
  await page.getByRole('textbox', { name: loginElements.username }).fill(loginData.validUsername);
  await page.getByRole('textbox', { name: loginElements.password }).fill(loginData.validPassword);
  await page.getByRole('button', { name: loginElements.loginBtn }).click();
  await page.context().storageState({ path: 'storageState.json' });

}