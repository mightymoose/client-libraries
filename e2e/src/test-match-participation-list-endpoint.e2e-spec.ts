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

    it('returns the bot ids', async () => {
        const botIDs = await TestMatchParticipationListEndpoint.botIDs();
        expect(botIDs).toEqual([
            '2',
            '3',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1'
        ]);
    });

    it('returns the match ids', async () => {
        const matchIDs = await TestMatchParticipationListEndpoint.matchIDs();
        expect(matchIDs).toEqual([
            '1',
            '1',
            '2',
            '2',
            '3',
            '3',
            '4',
            '4',
            '5',
            '5',
            '6',
            '6',
            '7',
            '7',
            '8',
            '8',
            '9',
            '9',
            '10',
            '10',
            '11',
            '11',
            '12',
            '12',
            '13'
        ]);

    });

    it('returns the created dates for the participations', async () => {
        const createdAt = await TestMatchParticipationListEndpoint.createdAt();
        expect(createdAt).toEqual([
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707'
        ]);
    });

    it('returns the updated dates for the participations', async () => {
        const updatedAt = await TestMatchParticipationListEndpoint.updatedAt();
        expect(updatedAt).toEqual([
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707',
            'Apr 15, 1707'
        ]);
    });
});
