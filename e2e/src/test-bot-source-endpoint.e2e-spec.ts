import { TestBotSourceEndpoint } from './test-bot-source-endpoint.po';

describe('the bot source endpoint', () => {
    beforeEach(async () => {
        await TestBotSourceEndpoint.load();
    });

    it('includes the bot source', async () => {
        const botSource = await TestBotSourceEndpoint.botSource();
        expect(botSource).toBe('function takeTurn(round) { round.chooseRock(); }');
    });
});
