const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const cart = dropdown.querySelector(".cart");
  const menu = dropdown.querySelector(".menu");
  const options = menu.querySelectorAll("li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    cart.classList.toggle("cart-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;

      select.classList.remove("select-clicked");
      cart.classList.remove("cart-rotate");
      menu.classList.remove("menu-open");

      options.forEach((opt) => {
        opt.classList.remove("active");
      });

      option.classList.add("active");
    });
  });
});
