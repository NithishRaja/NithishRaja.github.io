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
  "default": "static/images/cover_200.png",
  "0": "static/images/four_elements_200.png",
  "1": "static/images/assassins_creed_200.png",
  "2": "static/images/speed_skating_200.png",
  "3": "static/images/crown_200.png",
  "4": "static/images/basketball_200.png",
}
