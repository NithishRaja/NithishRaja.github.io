/****
  * File containing code to Initialise grid
  *
  */

// Script to add tiles to grid
(function(){
  // Get grid
  let grid = document.getElementById("grid");

  // Check if grid is Initialised
  if(grid){
    // Iterate grid size and add rows
    for(let i=0;i<grid_size;++i){
      // Create row element
      let row = document.createElement("div");
      // Add id to row element
      row.setAttribute("id", "row_"+i);
      // Add class to row
      row.classList.add("row");
      // Iterate over cells in current row
      for(let j=0;j<grid_size;++j){
        // Create column element
        let col = document.createElement("div");
        // Add id to col element
        col.setAttribute("id", "row_"+i+"_col_"+j);
        // Add class to col
        col.classList.add("col");
        // Initialise variable to hold id of tile
        let id = i*grid_size+j;

        // Create a card
        let card = createCardElement(getTileId(id, "front"), pair_image_map["default"]);
        // Set pair id
        card.setAttribute("pair_id", pairId[id]);
        // Make card visible
        card.classList.add("visible");
        // Append card to column
        col.appendChild(card);

        // Append column to row
        row.appendChild(col);
      }
      // Append row to grid
      grid.appendChild(row);
    }
  }
})();
