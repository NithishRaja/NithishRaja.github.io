/****
  * Index file
  *
  */

populateGrid();

// // Function to update global variables tracking clicked tiles
// function updateClickedTiles(id){
//   // Case 1: no tile is clicked, update first tile
//   if(tile_clicked_first === undefined){
//     tile_clicked_first = id;
//   }
//   // Case 2: first tile clicked previously, update second tile
//   else if(tile_clicked_first !== undefined && tile_clicked_second === undefined){
//     tile_clicked_second = id;
//   }
//   // Case 3: Both tiles clicked previously, do nothing
// }
//
// // Function to decide on action to perform based on clicked tiles
// function updateView(id){
//   // Case 1: One tile is clicked, flip tile's front with back
//   if(tile_clicked_first !== undefined && tile_clicked_second === undefined){
//     makeBackVisible(tile_clicked_first);
//   }
//   // Case 2: Both tiles clicked, check pair id to decide
//   else if(tile_clicked_first !== undefined && tile_clicked_second !== undefined){
//     console.log(tile_clicked_first+" "+tile_clicked_second);
//   }
// }
//
// // Function to make the back tile visible and front tile invisible
// function makeBackVisible(id){
//   // Make front tile invisible and back tile visible
//   document.getElementById(getTileId(id, "front")).classList.replace("visible", "invisible");
//   document.getElementById(getTileId(id, "back")).classList.replace("invisible", "visible");
// }
//
// // Function to make the front tile visible and back tile invisible
// function makeFrontVisible(id){
//   // Make back tile invisible and front tile visible
//   document.getElementById(getTileId(id, "back")).classList.replace("visible", "invisible");
//   document.getElementById(getTileId(id, "front")).classList.replace("invisible", "visible");
// }
//
// (function(){
//   // Iterate over all front tiles
//   for(let i=1;i<=9;++i){
//     // Get front tile
//     frontTile = document.getElementById(getTileId(i, "front"));
//     // Get back tile
//     backTile = document.getElementById(getTileId(i, "back"));
//     // Add click event listener to front tile
//     if(frontTile){
//       frontTile.addEventListener("click", function(event){
//         updateClickedTiles(i);
//         updateView(i);
//       }, false);
//     }
//   }
// })();