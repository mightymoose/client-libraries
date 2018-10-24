import { ElementFinder, $ } from 'protractor';
import { TestBackend } from './test-backend.po';

export class TestRockPaperScissorsRoundEndpoints {
    static get testRockPaperScissorsRoundListEndpointLink(): ElementFinder {
        return $('#test-rock-paper-scissors-round-list-endpoint-link');
    }

    static async load() {
        await TestBackend.load();
        await TestBackend.testRockPaperScissorsRoundEndpointsLink.click();
    }
}
