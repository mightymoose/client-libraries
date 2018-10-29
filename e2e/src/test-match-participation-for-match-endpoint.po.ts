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
}
