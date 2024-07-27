class GameView {
    constructor() {
        this.gameBoardElement = document.getElementById('game-board');
        this.scoreElement = document.getElementById('score');
        this.timeElement = document.getElementById('time');
    }

    renderBoard(board) {
        this.gameBoardElement.innerHTML = '';
        board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.textContent = cell ? 'placeholder' : '';
            cellElement.addEventListener('click', () => this.handleCellClick(index));
            this.gameBoardElement.appendChild(cellElement);
        });
    }

    updateScore(score) {
        this.scoreElement.textContent = `Score: ${score}`;
    }

    updateTime(time) {
        this.timeElement.textContent = `Time Left: ${time}s`;
    }

    handleCellClick(index) {
        if (this.onCellClick) {
            this.onCellClick(index);
        }
    }

    bindCellClickHandler(handler) {
        this.onCellClick = handler;
    }
}
export default GameView;
export { GameView };