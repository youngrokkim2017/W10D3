import React from 'react';
import Board from './board';
import * as Minesweeper from '../minsweeper';

class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.board
        this.state = {board: board};
    }

    updateGame() {

    }

    render() {
        return (
            <div>
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        );
    }
}

export default Game;