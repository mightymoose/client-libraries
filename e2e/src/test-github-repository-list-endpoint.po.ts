import { TestGithubRepositoryEndpoints } from './test-github-repository-endpoints.po';
import { $$ } from 'protractor';

export class TestGithubRepositoryListEndpoint {
    static githubRepositoryNames() {
        return $$('.github-repository-name').getText();
    }

    static githubRepositoryIDs(): any {
        return $$('.github-repository-id').getText();
    }

    static async dataTypes() {
        return await $$('.data-type').getText();
    }

    static createdAt() {
        return $$('.created-at').getText();
    }

    static updatedAt(): any {
        return $$('.updated-at').getText();
    }

    static async githubUserIDs() {
        return await $$('.github-user-id').getText();
    }

    static async load() {
        await TestGithubRepositoryEndpoints.load();
        await TestGithubRepositoryEndpoints.testGithubRepositoryListEndpointLink.click();
    }
}
