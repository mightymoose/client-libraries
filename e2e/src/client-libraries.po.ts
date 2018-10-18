import { browser, ElementFinder, $ } from 'protractor';

export class ClientLibraries {

    static get testBackendLink(): ElementFinder {
        return $('#backend-e2e-testing-link');
    }

    static async load() {
        await browser.get('/');
    }
}
