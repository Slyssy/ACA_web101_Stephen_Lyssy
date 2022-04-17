const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const projectLinks = document.querySelector('.projects-navlinks');
const mainJobCostingImage = document.querySelector('#job-costing-image');
const mainFloodImage = document.querySelector('#flood-image');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

//%Navbar toggle button event listener
toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
});

//% Smooth Scroll Function
projectLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('project-link')) {
    const destinationID = e.target.getAttribute('href');
    document
      .querySelector(destinationID)
      .scrollIntoView({ behavior: 'smooth' });
  }
});

//% Thumbnail Functions
function selectImageJobCosting(num) {
  const thumb = `images/project-images/carousel${num}.png`;
  mainJobCostingImage.src = thumb;
}
function selectImageFlood(num) {
  const thumb = `images/project-images/carousel${num}.png`;
  mainFloodImage.src = thumb;
}
