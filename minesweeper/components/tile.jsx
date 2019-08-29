import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let tile = this.props.tile;

        let bombOrFlag;
        let text;
        let count;
        
        if (tile.explored) {
            if (tile.bombed) {
                bombOrFlag = 'bomb';
                text = '\u2622';
            } else {
                bombOrFlag = 'explored';
                text = (count > 0 ? `${count}` : "");
                count = tile.adjacentBombCount();
            }
        } else if (tile.flagged) {
            bombOrFlag = 'flagged';
            text = '\u2691';
        } else {
            bombOrFlag = `tile ${bombOrFlag}`;
        }

        return (
            <div className={bombOrFlag} onClick={this.handleClick}>{text}</div>
        );
    }

    handleClick(e) {
        let flagTile = e.altKey ? true : false;
        this.props.updateGame(this.props.tile, flagTile);
    }
}

export default Tile;