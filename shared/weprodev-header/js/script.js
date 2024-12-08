/*------------------------------------*\
  #SELECTING ELEMENTS
\*------------------------------------*/

const searchButtonEl = document.querySelector(".search-button-js");
const searchBoxEl = document.querySelector(".search-box-js");
/*------------------------------------*\
  #EVENT HANDLERS
\*------------------------------------*/

searchButtonEl.addEventListener("click", function () {
  searchBoxEl.classList.add("active");
});
document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-box-js")) {
    searchBoxEl.classList.remove("active");
  }
});
