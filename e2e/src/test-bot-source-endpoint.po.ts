import { $ } from 'protractor';
import { TestBotEndpoints } from './test-bot-endpoints.po';

export class TestBotSourceEndpoint {

    static async botSource() {
        return await $('.bot-source').getText();
    }

    static async load() {
        await TestBotEndpoints.load();
        await TestBotEndpoints.testBotSourceEndpointLink.click();
    }
}
