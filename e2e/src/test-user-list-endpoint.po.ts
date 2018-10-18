import { TestUserEndpoints } from './test-user-endpoints.po';
import { $$ } from 'protractor';

export class TestUserListEndpoint {

    static async userActiveFlags() {
        return await $$('.user-active').getText();
    }

    static async userUsernames() {
        return await $$('.user-username').getText();
    }

    static async userIDs() {
        return await $$('.user-id').getText();
    }

    static async dataTypes() {
        return await $$('.data-type').getText();
    }

    static async load() {
        await TestUserEndpoints.load();
        await TestUserEndpoints.testUserListEndpointLink.click();
    }
}
