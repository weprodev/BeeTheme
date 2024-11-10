/*========================================================================================
*********   ALL OF THE JAVASCRIPT CODE 
*******      
*****       
***         
*/

$(document).ready(function(){

    /*--------------------------------
    ***  NAVIGATION ON SMALL DEVICE
    **   AND OPEN AND CLOSE
    */

    $(".icon-searchh").click(function(){
        $(".search-active").slideToggle();
        $(".search-active").css('top', '0em');
        $(this).parent().siblings('div.search-active').find("input.text-search").focus();
    });

    $(".icon-circle-down").click(function(){
      $(this).siblings('ul.dropdown').toggle('slide');
      $(this).toggleClass("icon-circle-down");
      $(this).toggleClass("icon-circle-up");
    });

    $(".section-responsive").click(function(){
      $(".menu").toggle('slide');
      $(".menu").css('display', 'block');
      $(this).toggleClass("icon-close");
    });



    // OUR PORTFOLIO SECTION
    var slider = tns({
      container: '.card-section-portfolio',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      controls: false,
      loop: true,
      nav: false,
      touch: true,
      gutter: 20,
      responsive: {
        1100: {
          items: 4,
          nav: true
        },
        850: {
          items: 3,
          nav: true
        },
        700:{
          items:2
        },
        230:{
          items: 1.1
        }
      }
    });


  });

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}