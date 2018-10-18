import { TestBackend } from './test-backend.po';
import { ElementFinder, $ } from 'protractor';

export class TestGithubRepositoryEndpoints {

    static get testGithubRepositoryListEndpointLink(): ElementFinder {
        return $('#test-github-repository-list-endpoint-link');
    }

    static async load() {
        await TestBackend.load();
        await TestBackend.testGithubRepositoryEndpointsLink.click();
    }
}
