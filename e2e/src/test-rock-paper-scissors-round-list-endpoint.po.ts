import { $$ } from 'protractor';
import { TestRockPaperScissorsRoundEndpoints } from './test-rock-paper-scissors-round-endpoints.po';

export class TestRockPaperScissorsRoundListEndpoint {

    static async roundIDs() {
        return await $$('.rock-paper-scissors-round-id').getText();
    }

    static async firstPlayerThrows() {
        return await $$('.rock-paper-scissors-first-player-throw').getText();
    }

    static async secondPlayerThrows() {
        return await $$('.rock-paper-scissors-second-player-throw').getText();
    }

    static async createdAt() {
        return await $$('.created-at').getText();
    }

    static async updatedAt() {
        return await $$('.updated-at').getText();
    }

    static async roundNumbers() {
        return await $$('.rock-paper-scissors-round-number').getText();
    }

    static async matchInstanceId() {
        return await $$('.match-instance-id').getText();
    }

    static async roundWinnerId() {
        return await $$('.round-winner-id').getText();
    }

    static async dataTypes() {
        return await $$('.data-type').getText();
    }

    static async load() {
        await TestRockPaperScissorsRoundEndpoints.load();
        await TestRockPaperScissorsRoundEndpoints.testRockPaperScissorsRoundListEndpointLink.click();
    }
}
