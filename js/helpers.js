/****
  * File containing all helper functions
  *
  */

// Function to return id of element based on number and type
function getTileId(number, type){
  return "tile_"+number+"_"+type;
}

// Function to create a card element
function createCardElement(id, image_url){
  // Create a card
  let card = document.createElement("div");
  // Add id to card
  card.setAttribute("id", id);
  // Add class to card
  card.classList.add("card");
  card.classList.add("mb-3");
  card.classList.add("shadow");
  // Create image element
  let image = document.createElement("img");
  // Set image source
  image.setAttribute("src", image_url);
  // Add class to image
  image.classList.add("card-img-top");
  // Append image to card
  card.appendChild(image);
  // Return card
  return card;
}
