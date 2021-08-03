/****
  * File containing code to Initialise grid
  *
  */

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

      // Create a card
      let card = document.createElement("div");
      // Initialise variable to hold id of card
      let id = i*grid_size+j;
      // Add id to card
      card.setAttribute("id", getTileId(id, "front"));
      // Set pair id
      card.setAttribute("pair_id", pairId[id]);
      // Add class to card
      card.classList.add("card");
      card.classList.add("mb-3");
      card.classList.add("shadow");
      card.classList.add("visible");
      // Create image element
      let image = document.createElement("img");
      // Set image source
      image.setAttribute("src", "static/images/square_small.png");
      // Add class to image
      image.classList.add("card-img-top");
      // Append image to card
      card.appendChild(image);
      // Append card to column
      col.appendChild(card);

      // Append column to row
      row.appendChild(col);
    }
    // Append row to grid
    grid.appendChild(row);
  }
}
