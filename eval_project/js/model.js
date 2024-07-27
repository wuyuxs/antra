class GameModel {
    constructor() {
        this.score = 0;
        this.timeLeft = 30; 
        this.boardSize = 12;
        this.board = Array(this.boardSize).fill(null);
    }

    increaseScore() {
        this.score += 1;
    }
    decreaseTime() {
        this.timeLeft -= 1;
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

    getMoleCount() {
        return this.board.filter(cell => cell === 1).length;
    }

    spawnMole() {
        const emptyCells = this.board.map((cell, index) => cell === null ? index : null).filter(cell => cell !== null);
        const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        this.board[emptyCells[randomIndex]] = 1;
    }

    spawnSnake() {
        const oldSnake = this.board.indexOf(2);
        const emptyCells = this.board.map((cell, index) => cell === null ? index : null).filter(cell => cell !== null);
        const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        this.board[oldSnake] = null;
        this.board[emptyCells[randomIndex]] = 2;
    }

    fillSnake() {
        this.board = Array(this.boardSize).fill(2)
    }

    hideMole(index) {
        this.board[index] = null;
    }

    resetGame() {
        this.score = 0;
        this.timeLeft = 30;
        this.board = Array(this.boardSize).fill(null);
    }
}
export default GameModel;
export { GameModel };
