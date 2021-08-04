/****
  * File containing code for popup
  *
  */

// Function to add click event listener to popup
function initialisePopup(){
  // Get popup element
  let popup = document.getElementById("popup_background");
  if(popup){
    // Add click event listener
    popup.addEventListener("click", function(){
      popup.style.display = "none";
    });
  }
}

function displayPopup(){
  // Get popup element
  let popup = document.getElementById("popup_background");
  if(popup){
    // Get popup content element
    content = document.getElementById("popup_content");
    // Add text to popup content element
    content.innerHTML = "tiles matched";
    // Make popup visible
    popup.style.display = "block";
  }
}
