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
