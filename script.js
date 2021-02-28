const openMenu = document.getElementById('menu_open');
const closeMenu = document.getElementById('menu_close');
const menuList = document.getElementById('menu_list');
const navLinks = document.querySelectorAll('.nav_link');

const workTitle = document.querySelectorAll('#work_spell');
const bouncingBalls = document.querySelectorAll('#bouncing_ball');

// Open the Menu
openMenu.addEventListener('click', () => {
  menuList.classList.add('active');
});

// Close the Menu
closeMenu.addEventListener('click', () => {
  menuList.classList.remove('active');
});

// Close the Menu after clicking the links
navLinks.forEach((link) => {
  link.addEventListener('click', navAction);
});

function navAction() {
  navLinks.forEach((link) => {
    link.classList.remove('current');
    menuList.classList.remove('active');
  });
  this.classList.add('current');
}

// Scroll to specific position

const scrollToY = (y) => {
  window.scrollTo({
    top: y,
    behavior: 'smooth',
  });
};
