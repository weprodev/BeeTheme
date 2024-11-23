/*------------------------------------*\
  #slider
\*------------------------------------*/
$(document).ready(function () { 
var slider = tns({
        container: ".slider",
        items: 3,
        slideBy: "page",
        autoplay: true,
        mouseDrag: true,
        controls: false,
        loop: true,
        nav: false,
        navAsThumbnails: false,
        navPosition: "bottom",
        touch: true,
        gutter: 20,
        responsive: {
          1250: {
            items: 3,
            nav: true,
          },
          850: {
            // items: 3,
            nav: true,
          },
          700: {
            items: 2,
            nav: true,
          },
          230: {
            items: 1,
            nav: true,
          },
        },
      });
    });