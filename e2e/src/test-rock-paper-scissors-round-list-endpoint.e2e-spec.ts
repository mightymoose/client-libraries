import { TestRockPaperScissorsRoundListEndpoint } from './test-rock-paper-scissors-round-list-endpoint.po';

describe('the rock paper scissors list endpoint', () => {
    beforeEach(async () => {
        await TestRockPaperScissorsRoundListEndpoint.load();
    });

    it('includes the rock paper scissors round ids', async () => {
        const roundIDs = await TestRockPaperScissorsRoundListEndpoint.roundIDs();
        expect(roundIDs).toEqual([
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

    it('includes first player\'s throw', async () => {
        const firstPlayerThrows = await TestRockPaperScissorsRoundListEndpoint.firstPlayerThrows();
        expect(firstPlayerThrows).toEqual([
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock'
        ]);
    });

    it('includes second player\'s throw', async () => {
        const secondPlayerThrows = await TestRockPaperScissorsRoundListEndpoint.secondPlayerThrows();
        expect(secondPlayerThrows).toEqual([
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock',
            'RockPaperScissorsRock'
        ]);
    });

    it('includes the data type', async () => {
        const dataTypes = await TestRockPaperScissorsRoundListEndpoint.dataTypes();
        expect(dataTypes).toEqual([
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
            'rock_paper_scissors_rounds',
        ]);
    });

    it('includes the round numbers', async () => {
        const roundNumbers = await TestRockPaperScissorsRoundListEndpoint.roundNumbers();
        expect(roundNumbers).toEqual([
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ]);
    });
});
