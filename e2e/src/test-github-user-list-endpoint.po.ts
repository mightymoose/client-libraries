import { $$ } from 'protractor';
import { TestGithubUserEndpoints } from './test-github-user-endpoints.po';

export class TestGithubUserListEndpoint {
    static githubUserUsernames() {
        return $$('.github-user-username').getText();
    }

    static githubUserIDs(): any {
        return $$('.github-user-id').getText();
    }

    static async dataTypes() {
        return await $$('.data-type').getText();
    }

    static async load() {
        await TestGithubUserEndpoints.load();
        await TestGithubUserEndpoints.testGithubUserListEndpointLink.click();
    }
}
