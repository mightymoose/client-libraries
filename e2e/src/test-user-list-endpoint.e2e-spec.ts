import { TestUserListEndpoint } from './test-user-list-endpoint.po';

describe('the user list endpoint', () => {
    beforeEach(async () => {
        await TestUserListEndpoint.load();
    });

    it('includes the user ids', async () => {
        const userIDs = await TestUserListEndpoint.userIDs();
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
        const dataTypes = await TestUserListEndpoint.dataTypes();
        expect(dataTypes).toEqual([
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users',
            'users'
        ]);
    });

    it('includes the user usernames', async () => {
        const usernames = await TestUserListEndpoint.userUsernames();
        expect(usernames).toEqual([
            'MightyMoose',
            'User #2',
            'User #3',
            'User #4',
            'User #5',
            'User #6',
            'User #7',
            'User #8',
            'User #9',
            'User #10',
            'User #11',
            'User #12',
            'User #13',
            'User #14',
            'User #15',
            'User #16',
            'User #17',
            'User #18',
            'User #19',
            'User #20',
            'User #21',
            'User #22',
            'User #23',
            'User #24',
            'User #25'
        ]);
    });

    it('includes the active flag', async () => {
        const activeFlags = await TestUserListEndpoint.userActiveFlags();
        expect(activeFlags).toEqual([
            'true',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false',
            'false'
        ]);
    });

    it('includes the created at date', async () => {
        const createdAt = await TestUserListEndpoint.createdAt();
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
            'Apr 15, 1707',
        ]);
    });

    it('includes the updated at date', async () => {
        const updatedAt = await TestUserListEndpoint.updatedAt();
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
