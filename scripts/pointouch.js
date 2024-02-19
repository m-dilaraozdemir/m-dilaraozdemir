document.querySelectorAll('.nav-link').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})

const hamburger = document.querySelector('.hamburger');
let hamburgerOpen = false;
hamburger.addEventListener('click', () => {
if(!hamburgerOpen) {
  hamburger.classList.add('open');
  hamburgerOpen = true;
} else {
  hamburger.classList.remove('open');
  hamburgerOpen = false;
}
});

const navmenu = document.querySelector('.navmenu');
let navmenuOpen = false;
hamburger.addEventListener('click', () => {
if(!navmenuOpen) {
  navmenu.classList.add('open');
  navmenuOpen = true;
} else {
  navmenu.classList.remove('open');
  navmenuOpen = false;
}
});


gsap.registerPlugin(ScrollTrigger);

const genVideoInfo = {
  totalFrames: 74,
  totalTime: 3,
  images: [],
  currentFrame: 0,
  currentImage: (index) =>
    `./pointouch_video/${index.toString().padStart(4, "0")}.jpeg`,
};

animation("dvideo", genVideoInfo);


ScrollTrigger.matchMedia({
  "(min-height: 1400px)": function () {
    gsap.from(".title", {
      opacity: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: ".title",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        snap: {
          duration: 1,
          snapTo: [0.32, 1],
        }
      }
    })
  }
})

ScrollTrigger.matchMedia({
  "(min-height: 1000px)": function () {
    gsap.from(".title", {
      opacity: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: ".title",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        snap: {
          duration: 1,
          snapTo: [0.29, 1],
        }
      }
    })
  }
})


const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".box2 a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".box2 a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
