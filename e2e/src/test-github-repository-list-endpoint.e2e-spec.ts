import { TestGithubRepositoryListEndpoint } from './test-github-repository-list-endpoint.po';

describe('the github respository list endpoint', () => {
    beforeEach(async () => {
        await TestGithubRepositoryListEndpoint.load();
    });

    it('includes the github repository ids', async () => {
        const repositoryIDs = await TestGithubRepositoryListEndpoint.githubRepositoryIDs();
        expect(repositoryIDs).toEqual([
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
        const dataTypes = await TestGithubRepositoryListEndpoint.dataTypes();
        expect(dataTypes).toEqual([
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories',
            'github_repositories'
        ]);
    });

    it('includes the github repository names', async () => {
        const repositoryNames = await TestGithubRepositoryListEndpoint.githubRepositoryNames();
        expect(repositoryNames).toEqual([
            'bots',
             'fake_repo #2',
             'fake_repo #3',
             'fake_repo #4',
             'fake_repo #5',
             'fake_repo #6',
             'fake_repo #7',
             'fake_repo #8',
             'fake_repo #9',
             'fake_repo #10',
             'fake_repo #11',
             'fake_repo #12',
             'fake_repo #13',
             'fake_repo #14',
             'fake_repo #15',
             'fake_repo #16',
             'fake_repo #17',
             'fake_repo #18',
             'fake_repo #19',
             'fake_repo #20',
             'fake_repo #21',
             'fake_repo #22',
             'fake_repo #23',
             'fake_repo #24',
             'fake_repo #25'
        ]);
    });

    it('includes the github user ids', async () => {
        const userIDs = await TestGithubRepositoryListEndpoint.githubUserIDs();
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

    it('includes the created at date', async () => {
        const createdAt = await TestGithubRepositoryListEndpoint.createdAt();
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
        const updatedAt = await TestGithubRepositoryListEndpoint.updatedAt();
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
