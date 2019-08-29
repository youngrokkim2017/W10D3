import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.rows = this.rows.bind(this);
        this.tiles = this.rows.bind(this);
    }

    render() {
        let board = this.props.board;
        let that = this;

        return (
            <div id="board">
                {this.rows()}
            </div>
        );
    }

    rows() {
        let board = this.props.board;

        return board.grid.map((row, rowIdx) => {
            return (
                <div className="row" key={`row${rowIdx}`}>
                    {this.tiles(row,i)}
                </div>
            );
        });
    }

    tiles() {
        let board = this.props.board;

        return board.grid.map((tile, tileIdx) => {
            return (
                <div className="tile">
                    <Tile
                    tile={tile}
                    udpdateGame = {this.props.udpdateGame}
                    key={rowIdx * tileIdx * board.gridSize}
                    />
                </div>
            );
        });
    }
}

export default Board;