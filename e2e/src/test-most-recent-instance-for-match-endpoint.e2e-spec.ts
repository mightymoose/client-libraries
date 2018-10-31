import { TestMostRecentInstanceForMatchEndpoint } from './test-most-recent-instance-for-match-endpoint.po';

describe('the match instance for matches endpoint', () => {
    beforeEach(async () => {
        await TestMostRecentInstanceForMatchEndpoint.load();
    });

    it('includes the match instance id', async () => {
        const matchInstanceID = await TestMostRecentInstanceForMatchEndpoint.matchInstanceID();
        expect(matchInstanceID).toEqual('99');
    });

    it('includes the data types', async () => {
        const dataType = await TestMostRecentInstanceForMatchEndpoint.dataType();
        expect(dataType).toEqual('match_instances');
    });


    it('includes the created at date', async () => {
        const createdAt = await TestMostRecentInstanceForMatchEndpoint.createdAt();
        expect(createdAt).toEqual('Jul 23, 1707');
    });

    it('includes the updated at date', async () => {
        const updatedAt = await TestMostRecentInstanceForMatchEndpoint.updatedAt();
        expect(updatedAt).toEqual('Jul 23, 1707');
    });

    it('includes the match ID', async () => {
        const matchID = await TestMostRecentInstanceForMatchEndpoint.matchID();
        expect(matchID).toEqual('2');
    });
});
