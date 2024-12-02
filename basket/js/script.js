$("#icon-close-page").on("click", function () {
  $("#sec-1").addClass("blur");
  $("#close-page").removeClass("hidden");
});

$("#close").on("click", function () {
  $("#close-page").addClass("hidden");
  $("#sec-1").removeClass("blur");
});
