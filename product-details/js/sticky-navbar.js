window.onscroll = function () {
    stickynavbarfunc();
  };

  var navbar = document.getElementById("header");
  var sticky = navbar.offsetTop;

  function stickynavbarfunc() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
      $(".content").css("padding-top", "5.5em");
    } else {
      navbar.classList.remove("sticky");
      $(".content").css("padding-top", "0em");
    }
  }