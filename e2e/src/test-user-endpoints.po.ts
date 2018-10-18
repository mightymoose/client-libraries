import { TestBackend } from './test-backend.po';
import { ElementFinder, $ } from 'protractor';

export class TestUserEndpoints {

    static get testUserListEndpointLink(): ElementFinder {
        return $('#test-user-list-endpoint-link');
    }

    static async load() {
        await TestBackend.load();
        await TestBackend.testUserEndpointsLink.click();
    }
}
