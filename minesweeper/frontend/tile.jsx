import React from 'react';

export class Tile extends React.Component {
  constructor(props){
    super(props); 
  }

  render(){
    const tile = this.props.tile;
    let content;
    (tile.explored) ? content = tile.adjacentBombCount() : content = "T";

    return(
      <div>{tile.explored}</div> 
      // <div>T</div> 
    )
  }
}

export default Tile;