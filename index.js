
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



  const thumbnails = document.querySelectorAll('.boxx img');
  const mainImage = document.getElementById('mainImage');
  const mainTitle = document.getElementById('mainTitle');
  const mainDescription = document.getElementById('mainDescription');
  const mainButton = document.getElementById('mainButton');

  const contentMap = {
    "img-2.jpg": {
      title: "Timeless Accessories",
      desc: "Discover more",
      btn: ""
    },
    "img-3.jpg": {
      title: "Urban Essentials",
      desc: "Step into the future",
      btn: "Explore"
    },
    "img-4.jpg": {
      title: "Elegant Classics",
      desc: "For every occasion",
      btn: "View Collection"
    },
    "img-1.jpg": {
      title: "Bold Statements",
      desc: "Make it yours",
      btn: "Buy Now"
    }
  };

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.getAttribute('src');
      const filename = src.split('/').pop();

      mainImage.src = src;

      // If the image filename matches a known config, update text
      if (contentMap[filename]) {
        const { title, desc, btn } = contentMap[filename];
        mainTitle.textContent = title;
        mainDescription.textContent = desc;

      }
    });
  });

