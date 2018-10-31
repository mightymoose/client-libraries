import { TestMatchInstanceEndpoints } from './test-match-instance-endpoints.po';
import { $ } from 'protractor';

export class TestMostRecentInstanceForMatchEndpoint {
    static async load() {
        await TestMatchInstanceEndpoints.load();
        await TestMatchInstanceEndpoints.testMostRecentInstanceForMatchEndpointLink.click();
    }

    static async matchInstanceID() {
        return await $('.match-instance-id').getText();
    }

    static async dataType() {
        return await $('.data-type').getText();
    }

    static async matchID() {
        return await $('.match-id').getText();
    }

    static async createdAt() {
        return await $('.created-at').getText();
    }

    static async updatedAt() {
        return await $('.updated-at').getText();
    }
}
