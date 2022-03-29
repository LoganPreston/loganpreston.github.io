/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var nav = document.getElementById("nav");
  if (prevScrollpos > currentScrollPos) {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
  prevScrollpos = currentScrollPos;
};
*/

function scrollToId(sectionId){
    document.getElementById(sectionId).scrollIntoView();
}