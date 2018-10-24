import { TestMatchInstanceListEndpoint } from './test-match-instance-list-endpoint.po';

describe('the match instance list endpoint', () => {
    beforeEach(async () => {
        await TestMatchInstanceListEndpoint.load();
    });

    it('includes the match instance ids', async () => {
        const matchInstanceIDs = await TestMatchInstanceListEndpoint.matchInstanceIDs();
        expect(matchInstanceIDs).toEqual([
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

    it('includes the match tokens', async () => {
        const matchTokens = await TestMatchInstanceListEndpoint.tokens();
        expect(matchTokens).toEqual([
            'match 1 token',
            'match 2 token',
            'match 3 token',
            'match 4 token',
            'match 5 token',
            'match 6 token',
            'match 7 token',
            'match 8 token',
            'match 9 token',
            'match 10 token',
            'match 11 token',
            'match 12 token',
            'match 13 token',
            'match 14 token',
            'match 15 token',
            'match 16 token',
            'match 17 token',
            'match 18 token',
            'match 19 token',
            'match 20 token',
            'match 21 token',
            'match 22 token',
            'match 23 token',
            'match 24 token',
            'match 25 token'
        ]);
    });

    it('includes the data types', async () => {
        const dataTypes = await TestMatchInstanceListEndpoint.dataTypes();
        expect(dataTypes).toEqual([
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
            'match_instances',
        ]);
    });
});
