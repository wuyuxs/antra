import GameModel from './model.js';
import GameView from './view.js';

class GameController {
    constructor() {
        this.model = new GameModel();
        this.view = new GameView();
        this.moleIntervalId = null;
        this.timerIntervalId = null;
    }

    init() {
        this.view.bindCellClickHandler(this.handleCellClick.bind(this));
        this.view.renderBoard(this.model.getBoard());
        this.view.bindButtonClickHandler(this.startGame.bind(this));
        this.updateView();
    }

    startGame() {
        console.log('Game started');
        this.model.resetGame();
        this.updateView();
        clearInterval(this.moleIntervalId);
        clearInterval(this.timerIntervalId);
        this.moleIntervalId = setInterval(this.updateMole.bind(this), 1000);
        this.timerIntervalId = setInterval(this.updateTimer.bind(this), 1000);
    }

    updateMole() {
        if (this.model.getMoleCount() < 2) {
            this.model.spawnMole();
            this.model.spawnMole();
        } else if (this.model.getMoleCount() < 3) {
            this.model.spawnMole();
        }
        console.log(this.model.getBoard());
        this.updateView();
    }

    updateTimer() {
        this.model.decreaseTime();
        this.updateView();
        if (this.model.getTimeLeft() <= 0) {
            clearInterval(this.moleIntervalId);
            clearInterval(this.timerIntervalId);
            alert('Game Over! Your score is ' + this.model.getScore());
            this.model.resetGame();
            this.updateView();
        }
    }

    handleCellClick(index) {
        if (this.model.getBoard()[index] === 1) {
            this.model.hideMole(index);
            this.model.increaseScore();
            this.updateView();
        }
    }

    updateView() {
        this.view.renderBoard(this.model.getBoard());
        this.view.updateScore(this.model.getScore());
        this.view.updateTime(this.model.getTimeLeft());
    }
}

export default GameController;
export { GameController, GameModel, GameView };