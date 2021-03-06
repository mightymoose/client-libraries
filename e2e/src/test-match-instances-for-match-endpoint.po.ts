import { $$ } from 'protractor';
import { TestMatchInstanceEndpoints } from './test-match-instance-endpoints.po';

export class TestMatchInstancesForMatchEndpoint {

    static async matchInstanceIDs() {
        return await $$('.match-instance-id').getText();
    }

    static async dataTypes() {
        return await $$('.data-type').getText();
    }

    static async matchIDs() {
        return await $$('.match-id').getText();
    }

    static async createdAt() {
        return $$('.created-at').getText();
    }

    static async updatedAt() {
        return $$('.updated-at').getText();
    }

    static async load() {
        await TestMatchInstanceEndpoints.load();
        await TestMatchInstanceEndpoints.testMatchInstancesForMatchEndpointLink.click();
    }
}
