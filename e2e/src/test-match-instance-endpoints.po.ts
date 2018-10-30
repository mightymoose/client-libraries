import { ElementFinder, $ } from 'protractor';
import { TestBackend } from './test-backend.po';

export class TestMatchInstanceEndpoints {
    static get testMostRecentInstanceForMatchEndpointLink(): ElementFinder {
        return $('#test-most-recent-instance-for-match-endpoint-link');
    }

    static get testMatchInstanceListEndpointLink(): ElementFinder {
        return $('#test-match-instance-list-endpoint-link');
    }

    static get testMatchInstancesForMatchEndpointLink(): ElementFinder {
        return $('#test-match-instances-for-match-endpoint-link');
    }

    static async load() {
        await TestBackend.load();
        await TestBackend.testMatchInstanceEndpointsLink.click();
    }
}
