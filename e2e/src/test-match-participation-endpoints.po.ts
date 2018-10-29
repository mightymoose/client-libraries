import { TestBackend } from './test-backend.po';
import { ElementFinder, $ } from 'protractor';

export class TestMatchParticipaitionEndpoints {

    static get testMatchParticipationListEndpointLink(): ElementFinder {
        return $('#test-match-participation-list-endpoint-link');
    }

    static get testMatchParticipationForMatchEndpointLink(): ElementFinder {
        return $('#test-match-participation-for-match-endpoint-link');
    }

    static async load() {
        await TestBackend.load();
        await TestBackend.testMatchParticipationEndpointsLink.click();
    }
}
