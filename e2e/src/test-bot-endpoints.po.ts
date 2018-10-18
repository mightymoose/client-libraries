import { TestBackend } from './test-backend.po';
import { ElementFinder, $ } from 'protractor';

export class TestBotEndpoints {
    static get testBotSourceEndpointLink(): ElementFinder {
        return $('#test-bot-source-endpoint-link');
    }

    static get testBotListEndpointLink(): ElementFinder {
        return $('#test-bot-list-endpoint-link');
    }

    static async load() {
        await TestBackend.load();
        await TestBackend.testBotEndpointsLink.click();
    }
}
