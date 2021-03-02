const openMenu = document.getElementById('menu_open');
const closeMenu = document.getElementById('menu_close');
const menuList = document.getElementById('menu_list');
const navLinks = document.querySelectorAll('.nav_link');
const sections = document.querySelectorAll('section');
const scrollToTop = document.getElementById('scrollToTop');
const emailResult = document.getElementById('email_status');

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
      scrollTop >= link.offsetTop - sections[0].offsetTop &&
      scrollTop < link.offsetHeight + link.offsetTop - 20
    ) {
      navLinks[index].classList.add('current');
    } else {
      navLinks[index].classList.remove('current');
    }
  });

  if (scrollTop > sections[0].offsetTop) {
    scrollToTop.classList.add('scroll-active');
  } else {
    scrollToTop.classList.remove('scroll-active');
  }
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

// Send Email through Contact Form
document
  .getElementById('contact_form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    // these IDs from the previous steps
    emailjs.sendForm('yujeong', 'yujeong_gmail', this).then(
      function () {
        emailResult.classList.add('active');
        emailResult.innerText = 'Sent Successfully.';

        document.getElementById('contact_name').value = '';
        document.getElementById('contact_eamil').value = '';
        document.getElementById('contact_meassage').value = '';

        setTimeout(function () {
          emailResult.classList.remove('active');
        }, 4000);
      },
      function (error) {
        emailResult.classList.add('active');
        emailResult.innerText = 'Something went wrong.';
        setTimeout(function () {
          emailResult.classList.remove('active');
        }, 4000);
      }
    );
  });
