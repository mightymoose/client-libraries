import { TestMatchParticipaitionEndpoints } from './test-match-participation-endpoints.po';
import { $$ } from 'protractor';

export class TestMatchParticipationListEndpoint {
    static async load() {
        await TestMatchParticipaitionEndpoints.load();
        await TestMatchParticipaitionEndpoints.testMatchParticipationListEndpointLink.click();
    }

    static async matchParticipationIDs() {
        return $$('.participant-id').getText();
    }

    static async botIDs() {
        return $$('.bot-id').getText();
    }

    static async matchIDs() {
        return $$('.match-id').getText();
    }

    static async createdAt() {
        return $$('.created-at').getText();
    }

    static async updatedAt() {
        return $$('.updated-at').getText();
    }
}
