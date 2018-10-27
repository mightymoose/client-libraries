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
});