import {test} from '@playwright/test';
import { login } from './logincheck';

export async function nextStep(page) {
    await login(page);
    await page.goto('https://practice.expandtesting.com/secure');
}