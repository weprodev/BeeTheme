$("#icon-close-page").on("click", function () {
  $("#sec-1").addClass("blur");
  $("#close-page").removeClass("hidden");
});

$("#close").on("click", function () {
  $("#close-page").addClass("hidden");
  $("#sec-1").removeClass("blur");
});

$("#no-button").on("click", function () {
  $("#sec-2").addClass("right-0");
});
$("#back-main-page2").on("click", function () {
  $("#sec-2").removeClass("right-0");
});
