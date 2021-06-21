import React from 'react';
import Tile from './tile';

export class Board extends React.Component {
  constructor(props){
    // debugger
    super(props);
   
    this.renderRows = this.renderRows.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
  }

  renderRows(){
    // debugger
    const board = this.props.board;
    return board.grid.map((row, i) => {
      return (
        // add a unique key to the div tag
        <div className="row" key={`${i} row`}>
          {this.renderTiles(row, i)}
        </div>
      )
    })
  } 

  renderTiles(row, i){
    // debugger
    return row.map((ele, j) => {
      return (<Tile updateGame={this.props.updateGame} tile={ele} key={j}/>)
      // is j a unique key
    })
  }

  render(){
    const board = this.props.board;

    return(
      // <h1>Board</h1>
      <div>
        {this.renderRows()}
      </div>
    )
  }

}


export default Board;
