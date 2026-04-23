import { test } from '@playwright/test';
import fs from 'fs';
import { getBaseUrl, getCredentials } from '../loginAUTH/config/env';

if(fs.existsSync('storageState.json')) {  
  test.use({ storageState: 'storageState.json' });
}

export async function login(page) {
 await page.goto(getBaseUrl());
  if (page.url().includes('/login')){
   await loginSteps(page);
   console.log('Created/Updated storageState.json file');
  }
  else{
   console.log('Using existing storageState.json file');

  }
}

export class LoginElements {
   username = "username";
   password = "password";
   loginBtn = "Login";
}   

export class LoginData {
    validUsername = "practice";
    validPassword = "SuperSecretPassword!";
}

export async function loginSteps(page) {
 
 const loginElements = new LoginElements();
  const creds = new getCredentials();
  await page.goto(getBaseUrl());
  await page.getByRole('textbox', { name: loginElements.username }).fill(creds.username);
  await page.getByRole('textbox', { name: loginElements.password }).fill(creds.password);
  await page.getByRole('button', { name: loginElements.loginBtn }).click();
  await page.context().storageState({ path: 'storageState.json' });

}




