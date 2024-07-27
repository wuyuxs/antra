class GameView {
    constructor() {
        this.gameBoardElement = document.getElementById('gameBoard');
        this.scoreElement = document.getElementById('score');
        this.timeElement = document.getElementById('time');
        this.buttonElement = document.getElementById('start');
    }

    renderBoard(board) {
        this.gameBoardElement.innerHTML = '';
        board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            if (cell) {
                cellElement.classList.add('mole');
                cellElement.addEventListener('click', () => this.handleCellClick(index));
            } else {
                cellElement.classList.add('hole');
            }
            this.gameBoardElement.appendChild(cellElement);
        });
    }

    updateScore(score) {
        this.scoreElement.textContent = `Let's go! Your Score is: ${score}`;
    }

    updateTime(time) {
        this.timeElement.textContent = `${time}s`;
    }

    handleCellClick(index) {
        if (this.onCellClick) {
            this.onCellClick(index);
        }
    }

    bindCellClickHandler(handler) {
        this.onCellClick = handler;
    }
    // Create Start button
    bindButtonClickHandler(handler) {
        this.buttonElement.addEventListener('click',()=> {
            console.log('button clicked');
            handler()});
    }

}
export default GameView;
export { GameView };