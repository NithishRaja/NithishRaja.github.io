/****
  * Index file
  *
  */

// Function to update global variables tracking clicked tiles
function updateClickedTiles(id){
  // Initialise variable to track case
  let status = false;
  // Case 1: no tile is clicked, update first tile
  if(tile_clicked_first === undefined){
    // Update clicked tile
    tile_clicked_first = id;
    // Update status
    status = true;
  }
  // Case 2: first tile clicked previously, update second tile
  else if(tile_clicked_first !== undefined && tile_clicked_second === undefined){
    // Case 2a: second tile is different from first tile
    if(tile_clicked_first !== id){
      // Update clicked tile
      tile_clicked_second = id;
      // update status
      status = true;
    }
    // Case 2b: first tile is clicked a second tile
  }
  // Case 3: Both tiles clicked previously, do nothing
  // Return status
  return status
}

// Function to update the tile image
function updateTileImage(id){
  // Get tile
  let tile = document.getElementById(getTileId(id, "front"));
  // Get pair id of tile
  pairId = tile.getAttribute("pair_id");
  // Get image element inside tile
  image = tile.children[0];
  // Update image source
  image.setAttribute("src", pair_image_map[pairId]);
}

// Function to reset tile image
function resetTileImage(id){
  // Get tile
  let tile = document.getElementById(getTileId(id, "front"));
  // Get image element inside tile
  image = tile.children[0];
  // Update image source
  image.setAttribute("src", pair_image_map["default"]);
}

// Function to decide on action to perform based on clicked tiles
function updateView(){
  // update first tile clicked
  if(tile_clicked_first !== undefined){
    updateTileImage(tile_clicked_first);
  }
  // Update second tile clicked
  if(tile_clicked_second !== undefined){
    updateTileImage(tile_clicked_second);
  }
}

// Function to compare pair id
function comparePairId(){
  // Check if clicked tiles have been clicked
  if(tile_clicked_second !== undefined){
    // Get clicked tiles
    firstTile = document.getElementById(getTileId(tile_clicked_first, "front"));
    secondTile = document.getElementById(getTileId(tile_clicked_second, "front"));
    // Get pair id of clicked tiles
    firstTilePairId = firstTile.getAttribute("pair_id");
    secondTilePairId = secondTile.getAttribute("pair_id");
    // Check if clicked tiles belong to same pair
    if(firstTilePairId === secondTilePairId){
      // TODO: Display pair matched message
      console.log("pair matched");
    }else{
      // Call function to reset clicked tiles
      resetTileImage(tile_clicked_first);
      resetTileImage(tile_clicked_second);
    }
    // Reset variables holding clicked tiles
    tile_clicked_first = undefined;
    tile_clicked_second = undefined;
  }
}

(function(){
  // Call function to populate grid
  populateGrid();
  // Iterate over tiles
  for(let id=0;id<grid_size*grid_size;++id){
    // Get tile
    let tile = document.getElementById(getTileId(id, "front"))
    // Add event listener to tile for click event
    tile.addEventListener("click", function(){
      // Call function to update clicked tiles
      status = updateClickedTiles(id);
      // Check status
      if(status){
        // Call function to update view
        updateView();
        // Call function to compare pair id of selected tiles
        comparePairId();
      }
    });
  }
})();
