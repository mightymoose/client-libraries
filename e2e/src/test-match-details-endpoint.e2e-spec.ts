import { TestMatchDetailsEndpoint } from './test-match-details-endpoint.po';

describe('the match details endpoint', () => {
    beforeEach(async () => {
        await TestMatchDetailsEndpoint.load();
    });

    it('includes the match id', async () => {
        const matchId: string = await TestMatchDetailsEndpoint.matchId();
        expect(matchId).toBe('1');
    });

    it('includes the match data type', async () => {
        const dataType: string = await TestMatchDetailsEndpoint.dataType();
        expect(dataType).toBe('matches');
    });

    it('includes the match status', async () => {
        const matchStatus: string = await TestMatchDetailsEndpoint.matchStatus();
        expect(matchStatus).toBe('MatchPending');
    });

    it('includes the match type', async () => {
        const matchType: string = await TestMatchDetailsEndpoint.matchType();
        expect(matchType).toBe('RockPaperScissors');
    });

    it('includes the match participants', async () => {
        expect(TestMatchDetailsEndpoint.participants.count()).toBe(2);
    });

    describe('the participant data', () => {
        it('includes the participant path', async () => {
            const participantPaths = await TestMatchDetailsEndpoint.participantPaths();
            expect(participantPaths).toEqual(['rock-paper-scissors/paper-bot.js', 'rock-paper-scissors/scissors-bot.js']);
        });

        it('includes the participant id', async () => {
            const participantIds = await TestMatchDetailsEndpoint.participantIds();
            expect(participantIds).toEqual(['2', '3']);
        });

        it('includes the participant data type', async () => {
            const participantDataTypes = await TestMatchDetailsEndpoint.participantDataTypes();
            expect(participantDataTypes).toEqual(['bots', 'bots']);
        });
    });
});
