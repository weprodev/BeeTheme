/*------------------------------------*\
  #DATA
\*------------------------------------*/

const demos = [
  {
    id: 0, // an id that is unique in the array
    name: "EventLand", // Name of your page
    createdBy: {
      name: "Ahmad Mohammadirad", // Your name
      github: "https://github.com/ahmadmohammadirad2006", // link of your github profile
    },
    url: "event-land/index.html", // URL of your page based on root dir
    mainImage: "event-land-main.png", // Name of your main page image in shared/images/
    entirePageImage: "event-land-entire.png", // Name of your entire page image in shared/images/
  },
  {
    id: 1,
    name: "SolarLand",
    createdBy: {
      name: "AbdolMajed ShahBakhsh",
      github: "https://github.com/abdolmajed3",
    },
    url: "solar-land/index.html",
    mainImage: "solar-land-main.jpeg",
    entirePageImage: "solar-land-entire.jpeg",
  },
  {
    id: 2,
    name: "AppLand",
    createdBy: {
      name: "Max Richard",
      github: "https://github.com/MaxRichard2007",
    },
    url: "app-land/index.html",
    mainImage: "app-land-main.jpeg",
    entirePageImage: "app-land-entire.jpeg",
  },
  {
    id: 3,
    name: "Basket",
    createdBy: {
      name: "Ahmad Mohammadirad",
      github: "https://github.com/ahmadmohammadirad2006",
    },
    url: "basket/index.html",
    mainImage: "basket-entire-main.png",
    entirePageImage: "basket-entire-main.png",
  },
  {
    id: 4,
    name: "ShowLand",
    createdBy: {
      name: "Sadi Karimi",
      github: "https://github.com/sadiGFG",
    },
    url: "show-land/index.html",
    mainImage: "show-land-main.png",
    entirePageImage: "show-land-entire.png",
  },
  {
    id: 5,
    name: "ProductDetails",
    createdBy: {
      name: "Ahmad Mohammadirad",
      github: "https://github.com/ahmadmohammadirad2006",
    },
    url: "product-details/index.html",
    mainImage: "product-details-main.png",
    entirePageImage: "product-details-entire.png",
  },
  {
    id: 6,
    name: "Blog",
    createdBy: {
      name: "Max Richard",
      github: "https://github.com/MaxRichard2007",
    },
    url: "blog/index.html",
    mainImage: "blog-main.png",
    entirePageImage: "blog-entire.png",
  },
];

/*------------------------------------*\
  #SELECTING ELEMENTS
\*------------------------------------*/

const homePagesContainerEl = document.querySelector(".home-pages-container-js");

/*------------------------------------*\
  #FUNCTIONS
\*------------------------------------*/

const displayDemoModal = function (demoId) {
  const demo = demos.find((demo) => demo.id === demoId);

  document.body.classList.add("modal-open");
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="demo-modal fade-in demo-modal-js">
      <div class="demo-modal__box">
        <div class="demo-modal__info">
          <div>
            <h3 class="demo-modal__name">${demo.name}</h3>
            <span class="demo-modal__by"
              >By
              <a
                href="${demo.createdBy.github}"
                class="demo-modal__by-link"
                target="_blank"
                >${demo.createdBy.name}</a
              ></span
            >
          </div>
          <a href="apps/original/${demo.url}" target="_blank" class="btn btn-button">Live Demo</a>
        </div>
        <img class="demo-modal__image" src="shared/assets/images/${demo.entirePageImage}" alt="${demo.name} Entire Page">
      </div>
    </div>
        `
  );
};

const removeDemoModal = function () {
  const demoModalEl = document.querySelector(".demo-modal-js");
  if (!demoModalEl) return;
  document.body.classList.remove("modal-open");
  demoModalEl.classList.remove("fade-in");
  demoModalEl.classList.add("fade-out");
  setTimeout(function () {
    demoModalEl.remove();
  }, 300);
};

/*------------------------------------*\
  #EVENT HANDLERS
\*------------------------------------*/

homePagesContainerEl.addEventListener("click", (e) => {
  const homePageEl = e.target.closest(".home-page-js");
  if (!homePageEl) return;
  displayDemoModal(+homePageEl.dataset.id);
  const demoModalEl = document.querySelector(".demo-modal-js");
  demoModalEl.addEventListener("click", (e) => {
    if (e.target.closest(".demo-modal__box")) return;
    removeDemoModal();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    removeDemoModal();
  }
});

/*------------------------------------*\
  #RENDER DMOES
\*------------------------------------*/
for (const demo of demos) {
  homePagesContainerEl.insertAdjacentHTML(
    "beforeend",
    `
          <div class="home-page__img_boxs home-page-js" data-id="${demo.id}">
              <img
                src="shared/assets/images/${demo.mainImage}"
                alt="${demo.name} main page"
              />
              <p class="home-page__number">${demo.name}</p>
          </div>
            `
  );
}
