document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation");
    const actionButtons = document.querySelector(".action-buttons");
  
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navigation.classList.toggle("active");
      actionButtons.classList.toggle("active");
    });
  });
  