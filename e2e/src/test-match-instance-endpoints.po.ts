import { ElementFinder, $ } from 'protractor';
import { TestBackend } from './test-backend.po';

export class TestMatchInstanceEndpoints {
    static get testMatchListEndpointLink(): ElementFinder {
        return $('#test-match-instance-list-endpoint-link');
    }

    static async load() {
        await TestBackend.load();
        await TestBackend.testMatchInstanceEndpointsLink.click();
    }
}
