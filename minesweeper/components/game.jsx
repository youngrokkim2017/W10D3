import React from 'react';
import Board from './board';
import * as Minesweeper from '../minsweeper';

class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.board(9, 10);
        this.state = {board: board};
        
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flagged) {
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({ board: this.state.board });
    }

    restartGame() {
        let board = new Minesweeper.board(9, 10);

        this.setState({ board: board });
    }

    render() {
        let modal;

        if (this.state.board.lost() || this.state.board.won()) {
            let popup = this.state.board.won() ? "You win!" : "You lose!";

            modal = 
                <div className="modal-screen">
                    <div className="modal-content">
                        <p>{popup}</p>
                        <button onClick={this.restartGame}>Restart</button>
                    </div>
                </div>
        }

        return (
            <div>
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        );
    }
}

export default Game;