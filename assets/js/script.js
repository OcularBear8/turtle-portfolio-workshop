'use strict';

// ============================================================
//  PORTFOLIO TEMPLATE — JavaScript
//  This file powers all the interactive features on your site.
//  You do NOT need to edit this file to customize your portfolio.
//  All your changes should be made in index.html only.
// ============================================================



// -----------------------------------------------------------
//  Helper: toggles the "active" class on any element
// -----------------------------------------------------------
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}



// -----------------------------------------------------------
//  SIDEBAR TOGGLE (mobile only)
//  On small screens, the sidebar collapses. The "Show Contacts"
//  button expands/collapses it.
// -----------------------------------------------------------
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});



// -----------------------------------------------------------
//  TESTIMONIALS MODAL
//  When you click a testimonial card, a popup appears with
//  the full testimonial text.
// -----------------------------------------------------------
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Open/close the testimonial modal
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Clicking a testimonial card fills the modal with that card's data
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// Close modal when clicking X or clicking outside
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// -----------------------------------------------------------
//  PORTFOLIO FILTER (categories)
//  Lets visitors filter projects by category (e.g. "Web design",
//  "Applications", etc.). Works on both mobile dropdown and
//  desktop button bar.
// -----------------------------------------------------------
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Toggle the mobile dropdown open/closed
select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// When a mobile dropdown option is clicked
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// The actual filtering logic — shows/hides projects based on category
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// Desktop filter buttons
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}



// -----------------------------------------------------------
//  PROJECT DETAIL MODAL (popup)
//  When you click a project card, a popup appears showing:
//  - The project image (larger)
//  - A detailed description
//  - Technologies used (as tags)
//  - A link to view the project
//
//  All data comes from the data-project-* attributes you set
//  on each <li class="project-item"> in index.html.
// -----------------------------------------------------------
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalClose = document.querySelector("[data-project-modal-close]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalDescription = document.querySelector("[data-project-modal-description]");
const projectModalTech = document.querySelector("[data-project-modal-tech]");
const projectModalLink = document.querySelector("[data-project-modal-link]");

// Open/close the project modal
const projectModalFunc = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
}

// Clicking a project card opens the detail popup
const projectItems = document.querySelectorAll("[data-filter-item]");

for (let i = 0; i < projectItems.length; i++) {

  projectItems[i].addEventListener("click", function (e) {
    // Prevent the default link behavior (the <a href="#">)
    e.preventDefault();

    // Read the data attributes from the clicked project
    const title = this.dataset.projectTitle;
    const description = this.dataset.projectDescription;
    const tech = this.dataset.projectTech;
    const link = this.dataset.projectLink;
    const imgElement = this.querySelector(".project-img img");

    // Fill the modal with project data
    projectModalTitle.textContent = title;
    projectModalDescription.textContent = description;
    projectModalImg.src = imgElement.src;
    projectModalImg.alt = title;

    // Create tech tags from the comma-separated string
    projectModalTech.innerHTML = "";
    if (tech) {
      const techArray = tech.split(",").map(function(t) { return t.trim(); });
      techArray.forEach(function(techName) {
        const tag = document.createElement("span");
        tag.className = "tech-tag";
        tag.textContent = techName;
        projectModalTech.appendChild(tag);
      });
    }

    // Set the project link (hide button if link is "#" or empty)
    if (link && link !== "#") {
      projectModalLink.href = link;
      projectModalLink.style.display = "flex";
    } else {
      projectModalLink.style.display = "none";
    }

    // Open the modal
    projectModalFunc();
  });
}

// Close project modal when clicking X or clicking outside
projectModalClose.addEventListener("click", projectModalFunc);
projectOverlay.addEventListener("click", projectModalFunc);



// -----------------------------------------------------------
//  PAGE NAVIGATION
//  Switches between About, Resume, and Portfolio pages
//  when you click the nav links at the top/bottom.
// -----------------------------------------------------------
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
