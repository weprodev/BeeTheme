const menuButtonDividerEl = document.querySelector(".js-menu-button-divider");
const openMenuBtnEl = document.querySelector(".js-open-menu-button");
const closeMenuBtnEl = document.querySelector(".js-close-menu-button");

openMenuBtnEl.addEventListener("click", function () {
  menuButtonDividerEl.classList.remove("close");
  menuButtonDividerEl.classList.add("open");
  document.body.style.overflowY = "hidden"
});

closeMenuBtnEl.addEventListener("click", function () {
  menuButtonDividerEl.classList.remove("open");
  menuButtonDividerEl.classList.add("close");
  document.body.style.overflowY = "auto"
});
