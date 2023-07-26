/****
  * Index file
  *
  */

(function(){
  homeSection = document.getElementById("section-home");
  researchSection = document.getElementById("section-research");
  gameSection = document.getElementById("section-game");

  homeButton = document.getElementById("nav-button-home");
  researchButton = document.getElementById("nav-button-research");
  gameButton = document.getElementById("nav-button-game");

  homeButton.addEventListener("click", function(e){
    console.log("h");
    homeSection.classList.remove("hide-section");
    researchSection.classList.add("hide-section");
    gameSection.classList.add("hide-section");
  });

  researchButton.addEventListener("click", function(e){
    console.log("r");
    homeSection.classList.add("hide-section");
    researchSection.classList.remove("hide-section");
    gameSection.classList.add("hide-section");
  });

  gameButton.addEventListener("click", function(e){
    console.log("g");
    homeSection.classList.add("hide-section");
    researchSection.classList.add("hide-section");
    gameSection.classList.remove("hide-section");
  });

})();

// (function(){
//   // Call function to populate grid
//   populateGrid();
//   // Call function to add listeners to tile
//   addListenersToTiles();
// })();
