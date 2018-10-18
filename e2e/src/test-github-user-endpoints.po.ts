import { TestBackend } from './test-backend.po';
import { ElementFinder, $ } from 'protractor';

export class TestGithubUserEndpoints {

    static get testGithubUserListEndpointLink(): ElementFinder {
        return $('#test-github-user-list-endpoint-link');
    }

    static async load() {
        await TestBackend.load();
        await TestBackend.testGithubUserEndpointsLink.click();
    }
}
