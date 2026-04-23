import { test, expect } from '@playwright/test';
import {login} from './logincheck';
import {nextStep} from './nextStep';

test('login test', async ({ page }) => {
    //await login(page);
    await nextStep(page);
});