import { $$ } from 'protractor';
import { TestMatchInstanceEndpoints } from './test-match-instance-endpoints.po';

export class TestMatchInstanceListEndpoint {

    static async matchInstanceIDs() {
        return await $$('.match-instance-id').getText();
    }

    static async dataTypes() {
        return await $$('.data-type').getText();
    }

    static async tokens() {
        return await $$('.match-instance-token').getText();
    }

    static async load() {
        await TestMatchInstanceEndpoints.load();
        await TestMatchInstanceEndpoints.testMatchListEndpointLink.click();
    }
}
