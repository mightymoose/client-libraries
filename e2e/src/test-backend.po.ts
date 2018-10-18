import { ClientLibraries } from './client-libraries.po';
import { ElementFinder, $ } from 'protractor';

export class TestBackend {
    static get testMatchEndpointsLink(): ElementFinder {
        return $('#test-match-endpoints-link');
    }

    static get testBotEndpointsLink(): ElementFinder {
        return $('#test-bot-endpoints-link');
    }

    static get testGithubUserEndpointsLink(): ElementFinder {
        return $('#test-github-user-endpoints-link');
    }

    static get testUserEndpointsLink(): ElementFinder {
        return $('#test-user-endpoints-link');
    }

    static get testGithubRepositoryEndpointsLink(): ElementFinder {
        return $('#test-github-repository-endpoints-link');
    }

    static async load() {
        await ClientLibraries.load();
        await ClientLibraries.testBackendLink.click();
    }
}
