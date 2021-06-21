import React from 'react';
import Tile from './tile';

export class Board extends React.Component {
  constructor(props){
    super(props);
    this.iterateMethod = this.iterateMethod.bind(this);
  }


  iterateMethod(){
    
  }

  render(){
    const board = this.props.board
    const updateGame = this.props.updateGame 

    return(
      // <h1>Board</h1>
      <Tile />
    )
  }

  
}


export default Board;
