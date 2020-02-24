document.getElementById('navbar-icon').addEventListener("click", function(){

  var navItems = document.getElementById("navbar-items");

//this toggles the nav items
//If navbar is open (block) then hide (none)
  if (navItems.style.display === "block")
  {
    navItems.style.display = "none";
  }
  else
  {
    navItems.style.display = "block";
    //else if its hidden, then show (display:block)
  }

});
