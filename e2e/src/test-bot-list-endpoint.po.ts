import { $$ } from 'protractor';
import { TestBotEndpoints } from './test-bot-endpoints.po';

export class TestBotListEndpoint {

    static async botPaths() {
        return await $$('.bot-path').getText();
    }

    static async botIDs() {
        return await $$('.bot-id').getText();
    }

    static async dataTypes() {
        return await $$('.data-type').getText();
    }

    static async load() {
        await TestBotEndpoints.load();
        await TestBotEndpoints.testBotListEndpointLink.click();
    }
}
