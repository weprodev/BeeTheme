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
    id: 1, // an id that is unique in the array
    name: "SolarLand", // Name of your page
    createdBy: {
      name: "AbdolMajed ShahBakhsh", // Your name
      github: "https://github.com/abdolmajed3", // link of your github profile
    },
    url: "solar-land/index.html", // URL of your page based on root dir
    mainImage: "solar-land-main.png", // Name of your main page image in shared/images/
    entirePageImage: "solar-land-entire.png", // Name of your entire page image in shared/images/
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
          <a href="${demo.url}" target="_blank" class="btn btn-button">Live Demo</a>
        </div>
        <img class="demo-modal__image" src="shared/images/${demo.entirePageImage}" alt="${demo.name} Entire Page">
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
                src="shared/images/${demo.mainImage}"
                alt="${demo.name} main page"
              />
              <p class="home-page__number">${demo.name}</p>
          </div>
            `
  );
}
