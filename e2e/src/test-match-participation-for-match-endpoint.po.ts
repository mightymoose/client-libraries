import { TestMatchParticipaitionEndpoints } from './test-match-participation-endpoints.po';
import { $$ } from 'protractor';

export class TestMatchParticipationForMatchEndpoint {
    static async load() {
        await TestMatchParticipaitionEndpoints.load();
        await TestMatchParticipaitionEndpoints.testMatchParticipationForMatchEndpointLink.click();
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

    static async tokens() {
        return $$('.token').getText();
    }
}
