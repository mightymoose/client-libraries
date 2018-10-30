import { TestMatchInstancesForMatchEndpoint } from './test-match-instances-for-match-endpoint.po';

describe('the match instance for matches endpoint', () => {
    beforeEach(async () => {
        await TestMatchInstancesForMatchEndpoint.load();
    });

    it('includes the match instance ids', async () => {
        const matchInstanceIDs = await TestMatchInstancesForMatchEndpoint.matchInstanceIDs();
        expect(matchInstanceIDs).toEqual([
            '1',
            '4',
            '7',
            '10',
            '13',
            '16',
            '19',
            '22',
            '25',
            '28',
            '31',
            '34',
            '37',
            '40',
            '43',
            '46',
            '49',
            '52',
            '55',
            '58',
            '61',
            '64',
            '67',
            '70',
            '73'
        ]);
    });

    it('includes the match tokens', async () => {
        const matchTokens = await TestMatchInstancesForMatchEndpoint.tokens();
        expect(matchTokens).toEqual([
            'match 1 token',
            'match 4 token',
            'match 7 token',
            'match 10 token',
            'match 13 token',
            'match 16 token',
            'match 19 token',
            'match 22 token',
            'match 25 token',
            'match 28 token',
            'match 31 token',
            'match 34 token',
            'match 37 token',
            'match 40 token',
            'match 43 token',
            'match 46 token',
            'match 49 token',
            'match 52 token',
            'match 55 token',
            'match 58 token',
            'match 61 token',
            'match 64 token',
            'match 67 token',
            'match 70 token',
            'match 73 token'
        ]);
    });

    it('includes the data types', async () => {
        const dataTypes = await TestMatchInstancesForMatchEndpoint.dataTypes();
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
            'match_instances'
        ]);
    });


    it('includes the created at date', async () => {
        const createdAt = await TestMatchInstancesForMatchEndpoint.createdAt();
        expect(createdAt).toEqual([
            'Apr 16, 1707',
            'Apr 19, 1707',
            'Apr 22, 1707',
            'Apr 25, 1707',
            'Apr 28, 1707',
            'May 1, 1707',
            'May 4, 1707',
            'May 7, 1707',
            'May 10, 1707',
            'May 13, 1707',
            'May 16, 1707',
            'May 19, 1707',
            'May 22, 1707',
            'May 25, 1707',
            'May 28, 1707',
            'May 31, 1707',
            'Jun 3, 1707',
            'Jun 6, 1707',
            'Jun 9, 1707',
            'Jun 12, 1707',
            'Jun 15, 1707',
            'Jun 18, 1707',
            'Jun 21, 1707',
            'Jun 24, 1707',
            'Jun 27, 1707'
        ]);
    });

    it('includes the updated at date', async () => {
        const updatedAt = await TestMatchInstancesForMatchEndpoint.updatedAt();
        expect(updatedAt).toEqual([
            'Apr 16, 1707',
            'Apr 19, 1707',
            'Apr 22, 1707',
            'Apr 25, 1707',
            'Apr 28, 1707',
            'May 1, 1707',
            'May 4, 1707',
            'May 7, 1707',
            'May 10, 1707',
            'May 13, 1707',
            'May 16, 1707',
            'May 19, 1707',
            'May 22, 1707',
            'May 25, 1707',
            'May 28, 1707',
            'May 31, 1707',
            'Jun 3, 1707',
            'Jun 6, 1707',
            'Jun 9, 1707',
            'Jun 12, 1707',
            'Jun 15, 1707',
            'Jun 18, 1707',
            'Jun 21, 1707',
            'Jun 24, 1707',
            'Jun 27, 1707'
        ]);
    });


    it('includes the match IDs', async () => {
        const matchIDs = await TestMatchInstancesForMatchEndpoint.matchIDs();
        expect(matchIDs).toEqual([
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3'
        ]);
    });
});
