import { TestMatchParticipationForMatchEndpoint } from './test-match-participation-for-match-endpoint.po';

describe('the match participation for match endpoint', () => {
    beforeEach(async () => {
        await TestMatchParticipationForMatchEndpoint.load();
    });

    it('returns the participant ids', async () => {
        const participantIDs = await TestMatchParticipationForMatchEndpoint.matchParticipationIDs();
        expect(participantIDs).toEqual([ '1', '2' ]);
    });

    it('returns the bot ids', async () => {
        const botIDs = await TestMatchParticipationForMatchEndpoint.botIDs();
        expect(botIDs).toEqual([ '2', '3' ]);
    });

    it('returns the match ids', async () => {
        const matchIDs = await TestMatchParticipationForMatchEndpoint.matchIDs();
        expect(matchIDs).toEqual([ '1', '1' ]);

    });

    it('returns the created dates for the participations', async () => {
        const createdAt = await TestMatchParticipationForMatchEndpoint.createdAt();
        expect(createdAt).toEqual([ 'Apr 15, 1707', 'Apr 15, 1707' ]);
    });

    it('returns the updated dates for the participations', async () => {
        const updatedAt = await TestMatchParticipationForMatchEndpoint.updatedAt();
        expect(updatedAt).toEqual([ 'Apr 15, 1707', 'Apr 15, 1707' ]);
    });
});
