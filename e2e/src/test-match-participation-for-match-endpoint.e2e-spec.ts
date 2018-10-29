import { TestMatchParticipationListEndpoint } from './test-match-participation-list-endpoint.po';
import { TestMatchParticipationForMatchEndpoint } from './test-match-participation-for-match-endpoint.po';

describe('the match participation for match endpoint', () => {
    beforeEach(async () => {
        await TestMatchParticipationForMatchEndpoint.load();
    });

    it('returns the participant ids', async () => {
        const participantIDs = await TestMatchParticipationListEndpoint.matchParticipationIDs();
        expect(participantIDs).toEqual([
            '1',
            '2'
        ]);
    });
});
