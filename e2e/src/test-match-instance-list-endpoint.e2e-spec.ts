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

    it('includes the match IDs', async () => {
        const matchIDs = await TestMatchInstanceListEndpoint.matchIDs();
        expect(matchIDs).toEqual([
            '3',
            '4',
            '2',
            '3',
            '4',
            '2',
            '3',
            '4',
            '2',
            '3',
            '4',
            '2',
            '3',
            '4',
            '2',
            '3',
            '4',
            '2',
            '3',
            '4',
            '2',
            '3',
            '4',
            '2',
            '3'
        ]);
    });

    it('includes the created at date', async () => {
        const createdAt = await TestMatchInstanceListEndpoint.createdAt();
        expect(createdAt).toEqual([
            'Apr 16, 1707',
            'Apr 17, 1707',
            'Apr 18, 1707',
            'Apr 19, 1707',
            'Apr 20, 1707',
            'Apr 21, 1707',
            'Apr 22, 1707',
            'Apr 23, 1707',
            'Apr 24, 1707',
            'Apr 25, 1707',
            'Apr 26, 1707',
            'Apr 27, 1707',
            'Apr 28, 1707',
            'Apr 29, 1707',
            'Apr 30, 1707',
            'May 1, 1707',
            'May 2, 1707',
            'May 3, 1707',
            'May 4, 1707',
            'May 5, 1707',
            'May 6, 1707',
            'May 7, 1707',
            'May 8, 1707',
            'May 9, 1707',
            'May 10, 1707'
        ]);
    });

    it('includes the updated at date', async () => {
        const updatedAt = await TestMatchInstanceListEndpoint.updatedAt();
        expect(updatedAt).toEqual([
            'Apr 16, 1707',
            'Apr 17, 1707',
            'Apr 18, 1707',
            'Apr 19, 1707',
            'Apr 20, 1707',
            'Apr 21, 1707',
            'Apr 22, 1707',
            'Apr 23, 1707',
            'Apr 24, 1707',
            'Apr 25, 1707',
            'Apr 26, 1707',
            'Apr 27, 1707',
            'Apr 28, 1707',
            'Apr 29, 1707',
            'Apr 30, 1707',
            'May 1, 1707',
            'May 2, 1707',
            'May 3, 1707',
            'May 4, 1707',
            'May 5, 1707',
            'May 6, 1707',
            'May 7, 1707',
            'May 8, 1707',
            'May 9, 1707',
            'May 10, 1707'
        ]);
    });
});
