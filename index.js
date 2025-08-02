
const toggleButton = document.querySelector('.toggle');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeSidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('open');
});




 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
  // gsap code here!
let smooth = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    smoothTouch: 0.1,
  

    })
 });

