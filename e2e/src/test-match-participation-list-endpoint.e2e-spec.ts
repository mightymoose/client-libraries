import { TestMatchParticipationListEndpoint } from './test-match-participation-list-endpoint.po';

describe('the match participation list endpoint', () => {
    beforeEach(async () => {
        await TestMatchParticipationListEndpoint.load();
    });

    it('returns the participant ids', async () => {
        const participantIDs = await TestMatchParticipationListEndpoint.matchParticipationIDs();
        expect(participantIDs).toEqual([
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25'
        ]);
    });
});
