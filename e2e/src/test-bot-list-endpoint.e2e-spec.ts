import { TestBotListEndpoint } from './test-bot-list-endpoint.po';

describe('the bot list endpoint', () => {
    beforeEach(async () => {
        await TestBotListEndpoint.load();
    });

    it('includes the bot ids', async () => {
        const botIDs = await TestBotListEndpoint.botIDs();
        expect(botIDs).toEqual([
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
        const dataTypes = await TestBotListEndpoint.dataTypes();
        expect(dataTypes).toEqual([
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots',
            'bots'
        ]);
    });

    it('includes the bot paths', async () => {
        const paths = await TestBotListEndpoint.botPaths();
        expect(paths).toEqual([
            'rock-paper-scissors/rock-bot.js',
            'rock-paper-scissors/paper-bot.js',
            'rock-paper-scissors/scissors-bot.js',
            'bot_path #4',
            'bot_path #5',
            'bot_path #6',
            'bot_path #7',
            'bot_path #8',
            'bot_path #9',
            'bot_path #10',
            'bot_path #11',
            'bot_path #12',
            'bot_path #13',
            'bot_path #14',
            'bot_path #15',
            'bot_path #16',
            'bot_path #17',
            'bot_path #18',
            'bot_path #19',
            'bot_path #20',
            'bot_path #21',
            'bot_path #22',
            'bot_path #23',
            'bot_path #24',
            'bot_path #25'
        ]);
    });

    it('includes the created at date', async () => {
        const createdAt = await TestBotListEndpoint.createdAt();
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
        const updatedAt = await TestBotListEndpoint.updatedAt();
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

    it('includes the github repository ids', async () => {
        const updatedAt = await TestBotListEndpoint.botRepositoryIds();
        expect(updatedAt).toEqual([
            '1',
            '1',
            '1',
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
