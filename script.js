const openMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");
const menuList = document.getElementById("menu-list");
const navLinks = document.querySelectorAll(".nav-link");

// Open the Menu
openMenu.addEventListener("click", () => {
  menuList.classList.add("active");
});

// Close the Menu
closeMenu.addEventListener("click", () => {
  menuList.classList.remove("active");
});

// Close the Menu after clicking the links
navLinks.forEach((link) => {
  link.addEventListener("click", navAction);
});

function navAction() {
  navLinks.forEach((link) => {
    link.classList.remove("current");
    menuList.classList.remove("active");
  });
  this.classList.add("current");
}

// Move the circle above the word "Work"
