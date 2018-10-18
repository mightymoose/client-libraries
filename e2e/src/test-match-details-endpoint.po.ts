import { TestMatchEndpoints } from './test-match-endpoints.po';
import { $, ElementArrayFinder, $$ } from 'protractor';

export class TestMatchDetailsEndpoint {
    static async load() {
        await TestMatchEndpoints.load();
        await TestMatchEndpoints.testMatchDetailsEndpointLink.click();
    }

    static matchId() {
        return $('.match-id').getText();
    }

    static async dataType() {
        return $('.data-type').getText();
    }

    static async matchStatus() {
        return $('.match-status').getText();
    }

    static async matchType() {
        return $('.match-type').getText();
    }

    static get participants(): ElementArrayFinder {
        return $$('.match-participant');
    }

    static async participantIds() {
        return $$('.match-participant-id').getText();
    }

    static async participantDataTypes() {
        return $$('.match-participant-data-type').getText();
    }

    static async participantPaths() {
        return $$('.match-participant-path').getText();
    }
}
