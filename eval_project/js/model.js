class GameModel {
    constructor() {
        this.score = 0;
        this.timeLeft = 30; // Game duration in seconds
        this.board = Array(12).fill(0);
    }

    increaseScore() {
        this.score += 1;
    }

    getScore() {
        return this.score;
    }

    getTimeLeft() {
        return this.timeLeft;
    }

    getBoard() {
        return this.board;
    }

    randomMole() {
        return Math.floor(Math.random() * 9);
    }

    showMole(index) {
        this.board[index] = 'mole';
    }

    hideMole(index) {
        this.board[index] = 0;
    }

    resetGame() {
        this.score = 0;
        this.timeLeft = 60;
        this.board = Array(9).fill(0);
    }
}
export default GameModel;
export { GameModel };
