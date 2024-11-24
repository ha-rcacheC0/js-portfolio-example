const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";

const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible";

const dataFilter = "[data-filter]";
const portfolioData = "[data-item]";

const root = document.documentElement;

// HTML Modal Card Data
const portfolioCardData = [
  {
    category: "web",
    image: "./assets/images/portfolio-1.jpg",
    title: "Food Website",
    htmlID: "web-1",
    header: "Web Project 1",
    strong: "My first awesome website",
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
    text2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
  },
  {
    category: "web",
    image: "./assets/images/portfolio-2.jpg",
    title: "Tech Website",
    htmlID: "web-2",
    header: "Web Project 2",
    strong: "My amazing website project",
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
    text2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
  },
  {
    category: "ui",
    image: "./assets/images/portfolio-4.jpg",
    title: "Marketing Website",
    htmlID: "ui-1",
    header: "UI Project 1",
    strong: "My amazing networking UI",
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
    text2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
  },
  {
    category: "web",
    image: "./assets/images/portfolio-3.jpg",
    title: "Shopping Website",
    htmlID: "web-3",
    header: "Web Project 3",
    strong: "My awesome e-commerce website",
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
    text2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
  },
  {
    category: "app",
    image: "./assets/images/portfolio-5.jpg",
    title: "Photo App",
    htmlID: "app-1",
    header: "App Project 1",
    strong: "My awesome photo app",
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
    text2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
  },
  {
    category: "app",
    image: "./assets/images/portfolio-6.jpg",
    title: "Trading App",
    htmlID: "app-2",
    header: "App Project 2",
    strong: "My awesome blockchain app",
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
    text2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
  },
  {
    category: "app",
    image: "./assets/images/portfolio-7.jpg",
    title: "Banking App",
    htmlID: "app-3",
    header: "App Project 3",
    strong: "My awesome banking application",
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
    text2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
  },
  {
    category: "ui",
    image: "./assets/images/portfolio-8.jpg",
    title: "Entertainment App",
    htmlID: "ui-2",
    header: "UI Project 2",
    strong: "My amazing UI App",
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
    text2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, modi error corrupti fuga excepturi mollitia!",
  },
];

// Modal Cards

const portfolioGrid = document.getElementById("portfolio-grid");

const displayCards = (cards) => {
  // let card = cards[i]
  cards.forEach((card) => {
    const portfolioCard = document.createElement("div");
    portfolioCard.classList.add("portfolio-card");
    portfolioCard.setAttribute("data-item", card.category);
    portfolioCard.setAttribute("data-open", card.htmlID);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardImage = document.createElement("img");
    cardImage.src = card.image;
    cardImage.alt = "portfolio-icon";

    const cardPopup = document.createElement("div");
    cardPopup.classList.add("card-popup-box");

    const categoryDiv = document.createElement("div");
    if (card.category === "web") {
      categoryDiv.textContent = "Web Development";
    } else if (card.category === "app") {
      categoryDiv.textContent = "App Development";
    } else if (card.category === "ui") {
      categoryDiv.textContent = "UI Design";
    }

    const title = document.createElement("h3");
    title.textContent = card.title;

    portfolioGrid.appendChild(portfolioCard);
    portfolioCard.appendChild(cardBody);
    cardBody.appendChild(cardPopup);
    cardBody.appendChild(cardImage);
    cardPopup.appendChild(categoryDiv);
    cardPopup.appendChild(title);
  });
};

displayCards(portfolioCardData);

// Popup Modals

const popUpModals = document.getElementById("popup-modals");

const displayPopup = (cards) => {
  cards.forEach((card) => {
    const modalDiv = document.createElement("div");
    modalDiv.id = card.htmlID;
    modalDiv.classList.add("modal");
    modalDiv.setAttribute("data-animation", "slideInOutTop");

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");

    const modalHeader = document.createElement("header");
    modalHeader.classList.add("modal-header");

    const modalH3 = document.createElement("h3");
    modalH3.textContent = card.header;

    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fas");
    closeIcon.classList.add("fa-times");
    closeIcon.setAttribute("data-close", "true");

    const modalBodyDiv = document.createElement("div");
    modalBodyDiv.classList.add("modal-body");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");

    const portfolioImg = document.createElement("img");
    portfolioImg.src = card.image;
    portfolioImg.alt = "portfolio image";

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");

    const pStrong = document.createElement("p");

    const strongText = document.createElement("strong");
    strongText.textContent = card.strong;

    const pText1 = document.createElement("p");
    pText1.textContent = card.text1;

    const pText2 = document.createElement("p");
    pText2.textContent = card.text2;

    popUpModals.appendChild(modalDiv);
    modalDiv.appendChild(modalDialog);
    modalDialog.appendChild(modalHeader);
    modalHeader.appendChild(modalH3);
    modalHeader.appendChild(closeIcon);
    modalDialog.appendChild(modalBodyDiv);
    modalBodyDiv.appendChild(imgWrapper);
    imgWrapper.appendChild(portfolioImg);
    modalBodyDiv.appendChild(textWrapper);
    textWrapper.appendChild(pStrong);
    pStrong.appendChild(strongText);
    textWrapper.appendChild(pText1);
    textWrapper.appendChild(pText2);
  });
};

displayPopup(portfolioCardData);

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector("#search");

// Modal
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
};

// Themes

const setTheme = (val) => {
  if (val === "dark") {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener("click", function () {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener("click", function () {
    const toggle = this.dataset.toggle;
    //set active state
    setActive(elm, switcherBtn);
    setTheme(toggle);
  });
}

searchBox.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Links filter

for (const link of filterLink) {
  link.addEventListener("click", function () {
    setActive(link, ".filter-link");
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (card.dataset.item === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Full Site Modal "open buttons"
for (const elm of openModal) {
  elm.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const elm of closeModal) {
  elm.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

// Modal
document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

const elmsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elms-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elms", marqueeContent.children.length);

for (let i = 0; i < elmsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
