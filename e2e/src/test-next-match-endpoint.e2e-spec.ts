import { TestNextMatchEndpoint } from './test-next-match-endpoint.po';
import { $, protractor, browser } from 'protractor';
import { TestMatchEndpoints } from './test-match-endpoints.po';
import { TestMatchDetailsEndpoint } from './test-match-details-endpoint.po';

describe('next match endpoint', () => {
    beforeEach(async () => {
        await TestNextMatchEndpoint.load();
    });

    afterEach(async () => {
        const until = protractor.ExpectedConditions;
        await TestMatchEndpoints.load();
        await TestMatchEndpoints.updateMatchToPendingLink.click();
        await browser.wait(until.presenceOf($('.match-status-updated')));
    });

    it('updates the match status', async () => {
        await TestMatchDetailsEndpoint.load();
        const updatedMatchStatus = await TestMatchDetailsEndpoint.matchStatus();
        expect(updatedMatchStatus).toBe('MatchInProgress');
    });

    it('includes the match id', async () => {
        const matchId: string = await TestNextMatchEndpoint.matchId();
        expect(matchId).toBe('1');
    });

    it('includes the match data type', async () => {
        const dataType: string = await TestNextMatchEndpoint.dataType();
        expect(dataType).toBe('matches');
    });

    it('includes the match status', async () => {
        const matchStatus: string = await TestNextMatchEndpoint.matchStatus();
        expect(matchStatus).toBe('MatchPending');
    });

    it('includes the match type', async () => {
        const matchType: string = await TestNextMatchEndpoint.matchType();
        expect(matchType).toBe('RockPaperScissors');
    });

    it('includes the match participants', async () => {
        expect(TestNextMatchEndpoint.participants.count()).toBe(2);
    });

    describe('the participant data', () => {
        it('includes the participant path', async () => {
            const participantPaths = await TestNextMatchEndpoint.participantPaths();
            expect(participantPaths).toEqual(['rock-paper-scissors/paper-bot.js', 'rock-paper-scissors/scissors-bot.js']);
        });

        it('includes the participant id', async () => {
            const participantIds = await TestNextMatchEndpoint.participantIds();
            expect(participantIds).toEqual(['2', '3']);
        });

        it('includes the participant data type', async () => {
            const participantDataTypes = await TestNextMatchEndpoint.participantDataTypes();
            expect(participantDataTypes).toEqual(['bots', 'bots']);
        });
    });
});
