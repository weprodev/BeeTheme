/*------------------------------------*\
  #SELECTING ELEMENTS
\*------------------------------------*/
const iconClosePageEl = document.getElementById("icon-close-page");
const sec1El = document.getElementById("sec-1");
const sec2El = document.getElementById("sec-2");
const sec3El = document.getElementById("sec-3");
const closeEl = document.getElementById("close");
const closePageEl = document.getElementById("close-page");
const noButtonEl = document.getElementById("no-button");
const backMainPage1El = document.getElementById("back-main-page1");
const backMainPage2El = document.getElementById("back-main-page2");
const yesButtonEl = document.getElementById("yes-button");

/*------------------------------------*\
  #EVENT HANDLERS
\*------------------------------------*/
iconClosePageEl.addEventListener("click", () => {
  sec1El.classList.add("blur");
  closePageEl.classList.remove("hidden");
});

closeEl.addEventListener("click", () => {
  sec1El.classList.remove("blur");
  closePageEl.classList.add("hidden");
});

noButtonEl.addEventListener("click", () => {
  sec2El.classList.add("right-0");
});

backMainPage2El.addEventListener("click", () => {
  sec2El.classList.remove("right-0");
});

yesButtonEl.addEventListener("click", () => {
  sec3El.classList.add("left-0");
});

backMainPage1El.addEventListener("click", () => {
  sec3El.classList.remove("left-0");
});
