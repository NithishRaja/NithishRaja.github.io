/****
  * File containing all global variables
  *
  */

// Initialise grid size
const grid_size = 3;

// Initialise global variables to track clicked tiles
let tile_clicked_first = undefined;
let tile_clicked_second = undefined;

// Initialise variable to hold number of pairs
const pairCount = Math.floor(grid_size*grid_size/2);

// Initialise array to hold pair ids
let pairId = [0];
// Add pair ids to array
for(let i=1;i<=pairCount;++i){
  pairId.push(i);
  pairId.push(i);
}
// Shuffle pair id
pairId.sort(function(){ return Math.random() - 0.5; });
