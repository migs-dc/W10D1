import React from 'react';
import ReactDOM from 'react-dom';
import * as Minesweeper from '../minesweeper'; // may not want to import here..?
import Game from './game';



function Root() {
  return (
      <>
          <Game/>
          <Board/>
          <Tile/>
      </>
  )
}

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementbyId("root");
  ReactDOM.render(<Root/>, root);
})


