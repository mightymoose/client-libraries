import { TestMatchEndpoints } from './test-match-endpoints.po';
import { TestMatchDetailsEndpoint } from './test-match-details-endpoint.po';
import { browser, protractor, $ } from 'protractor';

describe('the update match endpoint', () => {
    beforeEach(async () => {
        const until = protractor.ExpectedConditions;
        await TestMatchEndpoints.load();
        await TestMatchEndpoints.updateMatchToCancelledLink.click();
        await browser.wait(until.presenceOf($('.match-status-updated')));
    });

    afterEach(async () => {
        const until = protractor.ExpectedConditions;
        await TestMatchEndpoints.load();
        await TestMatchEndpoints.updateMatchToPendingLink.click();
        await browser.wait(until.presenceOf($('.match-status-updated')));
    });

    it('updates the match', async () => {
        await TestMatchDetailsEndpoint.load();
        const matchStatus = await TestMatchDetailsEndpoint.matchStatus();
        expect(matchStatus).toBe('MatchCancelled');
    });
});
