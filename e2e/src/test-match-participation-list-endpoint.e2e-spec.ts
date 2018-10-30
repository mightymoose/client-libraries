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

    it('returns tokens for the participants', async () => {
        const tokens = await TestMatchParticipationListEndpoint.tokens();
        expect(tokens).toEqual([
            'participation token #a1',
            'participation token #b1',
            'participation token #a2',
            'participation token #b2',
            'participation token #a3',
            'participation token #b3',
            'participation token #a4',
            'participation token #b4',
            'participation token #a5',
            'participation token #b5',
            'participation token #a6',
            'participation token #b6',
            'participation token #a7',
            'participation token #b7',
            'participation token #a8',
            'participation token #b8',
            'participation token #a9',
            'participation token #b9',
            'participation token #a10',
            'participation token #b10',
            'participation token #a11',
            'participation token #b11',
            'participation token #a12',
            'participation token #b12',
            'participation token #a13'
        ]);
    });
});
