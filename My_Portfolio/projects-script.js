const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const projectLinks = document.querySelector('.projects-navlinks');
const mainJobCostingImage = document.querySelector('#job-costing-image');
const mainFloodImage = document.querySelector('#flood-image');

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

function selectImageJobCosting(num) {
  const thumb = `images/project-images/carousel${num}.png`;
  mainJobCostingImage.src = thumb;
}
function selectImageFlood(num) {
  const thumb = `images/project-images/carousel${num}.png`;
  mainFloodImage.src = thumb;
}
