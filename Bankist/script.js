'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

const nav = document.querySelector('.nav')

let sections = document.querySelectorAll('.section')

let images = document.querySelectorAll('.features__img')

const slides = document.querySelectorAll('.slide')
const slider = document.querySelector('.slider')
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
const dotContainer = document.querySelector('.dots')

const openModal = function (e) {
  // stop page modal from jumping
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(element => {
  element.addEventListener('click', openModal);
});
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////
// Button Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect()
  // old
  // window.scrollTo(s1Coords.left + window.pageXOffset, s1Coords.top + window.pageYOffset)

  // new 
  // window.scrollTo({
  //   left: s1Coords.left + window.pageXOffset,
  //   top: s1Coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  // latest
  section1.scrollIntoView({ behavior: 'smooth' })
})

//////////////////////
// funtion to handle scrolling
// Basic Way using Event Bubbling [same function called 'n' times]
/*
const handleScrolling = (e) => {
  e.preventDefault();
  const id = e.currentTarget.getAttribute('href')
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
}

// Page Navigation
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', handleScrolling)
})
*/

// Using Event Delegation
// 1. Add Event Listener to common parent element
// 2. Determine what element originated the event
const handleScrolling = (e) => {
  e.preventDefault();
  const id = e.target.getAttribute('href')
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
}

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()

  // pattern matching
  if (e.target.classList.contains('nav__link')) {
    handleScrolling(e)
  }
})

//////////////////////
// Tabbed components
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault()
  const clickedBtn = e.target.closest('.operations__tab')

  // to avoid error
  if (!clickedBtn) return

  // or clickedBtn.dataset.tab
  const id = clickedBtn.getAttribute('data-tab')
  const customClassName = `.operations__content--${id}`;

  // remove active from all elements
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  tabsContent.forEach(el => el.classList.remove('operations__content--active'))

  clickedBtn.classList.add('operations__tab--active')
  document.querySelector(customClassName).classList.add('operations__content--active')
})

//////////////////////
// Menu Fade Animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}

/*
// BAD code

nav.addEventListener('mouseover', function (e) {
  e.preventDefault()
  const opacity = 0.5;
  handleHover(e, opacity)
})

nav.addEventListener('mouseout', function (e) {
  e.preventDefault()
  const opacity = 1;
  handleHover(e, opacity)
})

*/

// GOOD Code
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

//////////////////////
// Sticky Navigation
/*
const initialCoords = section1.getBoundingClientRect()
window.addEventListener('scroll', function () {
  if (window.screenY > initialCoords.top) {
    console.log('object')

    nav.classList.add('sticky')
  }
  else
    nav.classList.remove('sticky')
})
*/

//////////////////////
// Sticky Navigation - Observer API

/*
Observer API :

const observerCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry)
  })
}

const observerOptions = {
  root: null,
  threshold: [0, 1, 0.2]
}

const observer = new IntersectionObserver(observerCallback, observerOptions)
observer.observe(section1)
*/

const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height

const stickyNav = (entries) => {
  const [entry] = entries

  if (!entry.isIntersecting)
    nav.classList.add('sticky')
  else
    nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
})

headerObserver.observe(header)

//////////////////////
// Reveal Elements on scroll

const revealSection = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

sections.forEach(section => {
  sectionObserver.observe(section)
  section.classList.add('section--hidden');
})

//////////////////////
// Lazy Loading
// idea is to remove low resolution image(src) with high resolution image (data-src)
const imageSection = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target)
}

const imageObserver = new IntersectionObserver(imageSection, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
})

images.forEach(image => imageObserver.observe(image))

//////////////////////
// Slider

const sliderHandler = () => {
  let currentSlide = 0;
  const len = slides.length

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }

  // activate dot
  const activateDot = (slide) => {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'))

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active')
  }

  const gotoSlide = (curr) => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(100 * (index - curr))}%)`
      activateDot(curr)
    })
  }

  // inital setup
  const init = () => {
    createDots()
    gotoSlide(0)
  }
  init()

  const nextSlide = () => {
    currentSlide = (currentSlide === len - 1) ? 0 : currentSlide + 1;
    gotoSlide(currentSlide)
  }

  const prevSlide = () => {
    currentSlide = (currentSlide === 0) ? len - 1 : currentSlide - 1;
    gotoSlide(currentSlide)
  }

  // Event Handlers : left and right btn
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)

  // left and right arrow keys (keyboard events)
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide()
    e.key === 'ArrowRight' && nextSlide()
  })

  // slide using dots
  dotContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset
      gotoSlide(slide)
    }
  })
}

sliderHandler()

// show message to user before closing tab
/*
window.addEventListener('beforeunload', function (e) {
  e.preventDefault()
  e.returnValue = "" // browser will throw popup for confirmation
})
*/