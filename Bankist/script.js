'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

// Button Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect()
  console.log(s1Coords)
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
  console.log(e.target)

  // pattern matching
  if (e.target.classList.contains('nav__link')) {
    handleScrolling(e)
  }
})