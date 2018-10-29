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
}
