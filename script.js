const openMenu = document.getElementById('menu_open');
const closeMenu = document.getElementById('menu_close');
const menuList = document.getElementById('menu_list');
const navLinks = document.querySelectorAll('.nav_link');
const sections = document.querySelectorAll('section');
console.log(sections); //////////
const scrollToTop = document.getElementById('scrollToTop');

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
window.addEventListener('scroll', () => {
  const { scrollTop } = document.documentElement;
  sections.forEach((link, index) => {
    if (
      scrollTop > link.offsetTop - sections[0].offsetTop &&
      scrollTop < link.offsetHeight + link.offsetTop - 20
    ) {
      navLinks[index].classList.add('current');
    } else {
      navLinks[index].classList.remove('current');
    }
  });
});

scrollToTop.addEventListener('click', () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
);

navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
