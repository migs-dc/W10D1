import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';

// function Root() {
//   return (
//       <>
//           <Game/>
//       </>
//   )
// }

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById("root");
  // ReactDOM.render(<Root/>, root);
  ReactDOM.render(<Game/>, root);
})

