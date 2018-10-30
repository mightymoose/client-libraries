import { $$ } from 'protractor';
import { TestMatchEndpoints } from './test-match-endpoints.po';

export class TestMatchListEndpoint {

    static async matchStatuses() {
        return await $$('.match-status').getText();
    }

    static async matchTypes() {
        return await $$('.match-type').getText();
    }

    static async matchIDs() {
        return await $$('.match-id').getText();
    }

    static async dataTypes() {
        return await $$('.data-type').getText();
    }

    static async createdAt() {
        return $$('.created-at').getText();
    }

    static async updatedAt() {
        return $$('.updated-at').getText();
    }

    static async rated() {
        return $$('.rated').getText();
    }

    static async load() {
        await TestMatchEndpoints.load();
        await TestMatchEndpoints.testMatchListEndpointLink.click();
    }
}
