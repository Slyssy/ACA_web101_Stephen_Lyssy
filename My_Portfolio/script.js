const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const profileQualifications = document.querySelector('#profile-qualifications');
const profileQualificationsLink = document.querySelector(
  '#profile-qualifications-link'
);
const resumeNavbar = document.querySelector('.resume-navbar');
const resumeLinks = document.querySelector('.resume-links');
const stickyClose = document.querySelector('.close-icon');

//% Navbar toggle button event listener
toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});

resumeLinks.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('resume-link')) {
    const destinationID = e.target.getAttribute('href');
    document
      .querySelector(destinationID)
      .scrollIntoView({ behavior: 'smooth' });
  }
});

//% Sticky Navbar
window.addEventListener('scroll', () => {
  const resumeNavbar = document.querySelector('.resume-navbar');
  resumeNavbar.classList.toggle('sticky', window.scrollY > 0);
});

stickyClose.addEventListener('click', (e) => {
  resumeNavbar.classList.remove('sticky');
});
