import { TestGithubUserListEndpoint } from './test-github-user-list-endpoint.po';

describe('the github respository list endpoint', () => {
    beforeEach(async () => {
        await TestGithubUserListEndpoint.load();
    });

    it('includes the github user ids', async () => {
        const userIDs = await TestGithubUserListEndpoint.githubUserIDs();
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
        const dataTypes = await TestGithubUserListEndpoint.dataTypes();
        expect(dataTypes).toEqual([
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users',
            'github_users'
        ]);
    });

    it('includes the github user names', async () => {
        const userNames = await TestGithubUserListEndpoint.githubUserUsernames();
        expect(userNames).toEqual([
            'mightymoose',
            'github_user #2',
            'github_user #3',
            'github_user #4',
            'github_user #5',
            'github_user #6',
            'github_user #7',
            'github_user #8',
            'github_user #9',
            'github_user #10',
            'github_user #11',
            'github_user #12',
            'github_user #13',
            'github_user #14',
            'github_user #15',
            'github_user #16',
            'github_user #17',
            'github_user #18',
            'github_user #19',
            'github_user #20',
            'github_user #21',
            'github_user #22',
            'github_user #23',
            'github_user #24',
            'github_user #25'
        ]);
    });


    it('includes the created at dates', async () => {
        const createdAt = await TestGithubUserListEndpoint.createdAt();
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

    it('includes the updated at dates', async () => {
        const updatedAt = await TestGithubUserListEndpoint.updatedAt();
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

    it('includes the user ids', async () => {
        const userIDs = await TestGithubUserListEndpoint.userIDs();
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
});
