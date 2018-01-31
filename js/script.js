/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function changeColor() {
    document.getElementById("colorChange").classList.toggle("containerActive");
}


//Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.container, .menuicon, .menuarrow, .dropdown-mainbar, i') ) {

    var dropdowns = document.getElementsByClassName("hiddencontent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    var xColor = document.getElementsByClassName("container");
    var i;
      for (i = 0; i < xColor.length; i++) {
    	var yColor = xColor[i];
    	if (yColor.classList.contains('containerActive')) {
          yColor.classList.remove('containerActive');
      }
    }
  }
}
