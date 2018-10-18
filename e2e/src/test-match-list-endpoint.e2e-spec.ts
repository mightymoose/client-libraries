import { TestMatchListEndpoint } from './test-match-list-endpoint.po';

describe('the match list endpoint', () => {
    beforeEach(async () => {
        await TestMatchListEndpoint.load();
    });

    it('includes the match ids', async () => {
        const userIDs = await TestMatchListEndpoint.botIDs();
        expect(userIDs).toEqual([
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

    it('includes the type of the data', async () => {
        const dataTypes = await TestMatchListEndpoint.dataTypes();
        expect(dataTypes).toEqual([
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches',
            'matches'
        ]);
    });

    it('includes the match types', async () => {
        const matchTypes = await TestMatchListEndpoint.matchTypes();
        expect(matchTypes).toEqual([
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors',
            'RockPaperScissors'
        ]);
    });

    it('includes the match statuses', async () => {
        const matchStatuses = await TestMatchListEndpoint.matchStatuses();
        expect(matchStatuses).toEqual([
            'MatchPending',
            'MatchInProgress',
            'MatchComplete',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled',
            'MatchCancelled'
        ]);
    });
});
