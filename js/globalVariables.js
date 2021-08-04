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

// Initialise dictionary mapping pair id to corresponding image
const pair_image_map = {
  "default": "static/images/cover.png",
  "0": "static/images/joker.png",
  "1": "static/images/king_clubs.png",
  "2": "static/images/king_diamonds.png",
  "3": "static/images/king_spades.png",
  "4": "static/images/king_hearts.png",
}
