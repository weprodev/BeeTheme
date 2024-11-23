/*------------------------------------*\
  #search box js
\*------------------------------------*/
$(document).ready(function () {
    $("#search-btn").click(function () {
      $("#input-search").addClass("click-search-txt");
      $("#input-search-btn").addClass("click-search-btn");
    });

    $(document).on("click", function (e) {
      if (!$(e.target).parent().hasClass("search-box")) {
        $("#input-search").removeClass("click-search-txt");
        $("#input-search-btn").removeClass("click-search-btn");
      }
    });
});