
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
function myFunction() {
  document.getElementById("demo").innerHTML = '<div w3-include-html="html/accueil.html"></div> ';
}

function myFunction2() {

  $('li').click(function() { 
    $('li.nav-item.active').removeClass("active"); 
    $(this).addClass("active"); 
}); 
}
function myFunction1() {
  document.getElementById("inscriptionNewsletter").style.display = "block";
  document.getElementById("accueil").style.display = "none";

}