import { TestBackend } from './test-backend.po';
import { ElementFinder, $ } from 'protractor';

export class TestMatchEndpoints {

    static get testNextMatchEndpointLink(): ElementFinder {
        return $('#test-next-match-endpoint-link');
    }

    static get testMatchListEndpointLink(): ElementFinder {
        return $('#test-match-list-endpoint-link');
    }

    static get testMatchDetailsEndpointLink(): ElementFinder {
        return $('#test-match-details-endpoint-link');
    }

    static get updateMatchToCancelledLink(): ElementFinder {
        return $('#test-update-match-to-cancelled-link');
    }

    static get updateMatchToPendingLink(): ElementFinder {
        return $('#test-update-match-to-pending-link');
    }

    static async load() {
        await TestBackend.load();
        await TestBackend.testMatchEndpointsLink.click();
    }
}
