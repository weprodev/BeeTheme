window.onscroll = function() {myFunction()};

var header = document.getElementById("stickynavbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    $(".content").css("margin-top","4em");
  } else {
    header.classList.remove("sticky");
    $(".content").css("margin-top","0em");
  }
}