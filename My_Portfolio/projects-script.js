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
// projectLinks.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains('project-link')) {
//     const destinationID = e.target.getAttribute('href');
//     document
//       .querySelector(destinationID)
//       .scrollIntoView({ behavior: 'smooth' });
//   }
// });

//% Thumbnail Functions
function selectImageJobCosting(num) {
  const thumb = `images/project-images/carousel${num}.png`;
  mainJobCostingImage.src = thumb;
}
function selectImageFlood(num) {
  const thumb = `images/project-images/carousel${num}.png`;
  mainFloodImage.src = thumb;
}

//% Implementing slider component
const sliderFunction = function () {
  let curSlide = 0;
  const maxSlide = slides.length;

  //? Function to create slider dots.
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  //? Create a function that will change the "Active" dot in the slider dots.
  const activateDot = function (slide) {
    //*First deactivate all dots.
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => dot.classList.remove('dots__dot--active'));
  };

  //? Function to loop through the slides and update there style to adjust their
  //? position.
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //? Creat a function to move the slides to the right.
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    // console.log(curSlide);
    activateDot(curSlide);
  };

  //? Creat a function to move the slides to the left.
  const prevSlide = function () {
    if (curSlide <= 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    // console.log(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    //$ Running goToSlide(0) to load the page on the first slide.
    goToSlide(0);
    //$ Running createDots() to create the slider dots when the page is loaded.
    createDots();
    //$ Running activateDot(0) to show active slide dot when the page is loaded.
    activateDot(0);
  };
  init();

  //# Event Listeners -------------------------------------------
  //? Add event listeners to the right and left buttons to select slide position.
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //? Add a keyboard event to move through the slides.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  //? Add event listener to the dots using event delegation.
  //* dotContainer is the parent element for all of the dots.
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // console.log(e.target);
      const { slide } = e.target.dataset;
      // console.log(slide);
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
sliderFunction();
