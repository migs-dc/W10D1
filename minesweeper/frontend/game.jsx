import React from 'react';
import Board from 'board';

export class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 9)
    }
  }

  updateGame(){

  }

  render(){
    return(
      <h1>Board</h1>
    )
  }
}
