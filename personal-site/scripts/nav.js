// set the nav bar to change the background color when the window got scrolled down
const navBar = document.querySelector('nav');
window.onscroll = () => {
  if (window.scrollY > 5) {
    navBar.classList.add('nav-active-onsroll');
    console.log('hello');
  } else {
    navBar.classList.remove('nav-active-onsroll')
  }
};

const aboutMeNav = document.querySelector('.about-me-nav');
const aboutMeTool = document.querySelector('.about-me-tool');
aboutMeNav.addEventListener('mouseover', () => aboutMeTool.classList.add('about-me-tool-hover'));
aboutMeNav.addEventListener('mouseleave', () => aboutMeTool.classList.remove('about-me-tool-hover'));
aboutMeTool.addEventListener('mouseover', () => aboutMeTool.classList.add('about-me-tool-hover'));
aboutMeTool.addEventListener('mouseleave', () => aboutMeTool.classList.remove('about-me-tool-hover'));

const aboutMeNavSmallSection = document.querySelector('.about-me-tool-small-section');
const rightArrow = document.querySelector('.right-arrow');
aboutMeNavSmallSection.addEventListener('mouseover', () => rightArrow.classList.add('right-arrow-active'));
aboutMeNavSmallSection.addEventListener('mouseleave', () => rightArrow.classList.remove('right-arrow-active'));