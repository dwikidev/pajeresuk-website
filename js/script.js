

// --------------------------------------------------#TODO link kuliner------------------

function goMieTeluk(){
  window.location.href = './page/kuliner.html#mie-teluk';

}

function goRafins(){
  window.location.href = './page/kuliner.html#rafins';
}




// --------------------------------------------------#TODO active navbar------------------
let subNavbar = document.querySelector(".sub-navbar");
let navbar = document.querySelector(".navbar");
let logo = document.getElementById("logo-img");

window.onload = () =>{
  if(window.screenY > 30){
      logo.style.opacity = 1;
  }
  else{
    logo.style.opacity = 0.5;
  }
}

window.onscroll = () =>{

  if(window.scrollY > 30){
      subNavbar.classList.add('active');
      navbar.classList.add('active');
      logo.style.opacity = 1;
  }else{
      subNavbar.classList.remove('active');
      navbar.classList.remove('active');
      logo.style.opacity = 0.5;
  }
}; 









// ----------------------------#TODO home slider---------------------------------------
const Homeswiper = new Swiper(".home-slider", {
  loop:true, 
  keyboard: true,
  grabCursor: false,
  autoplay: {
   delay: 5000,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});


// ----------------------------#TODO to top scroller------------------------------------
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
 if (window.scrollY > 100) {
   toTop.classList.add("active");
 } else {
   toTop.classList.remove("active");
 }
})




// --------------------------------------------------#TODO destinasi slider------------------
const destinasiSwiper = new Swiper(".destinasi-slider", {
   loop: true, 
   grabCursor: true,
   longSwipes: true,
   spaceBetween: 10,
   keyboard: true,
   pauseOnMouseEnter: true,
   effect: 'coverflow',
   coverflowEffect: {
     rotate: 0,
     slideShadows: true,
   },
   freeMode: {
    enabled: true,
    sticky: true,
    minimumVelocity: 0.01,
    momentumBounceRatio: 5,
   },
   autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       991: {
         slidesPerView: 3,
       },
   },
});


// --------------------------------------------------#TODO responsice navbar------------------
let dropdown = document.querySelector(".dropdown");
let dropdownSubPage = document.querySelector(".dropdown-res");
let dropdownMenu = document.querySelector(".container-navbar .dropdown.menu");
let dropdownMenuDisplay = window.getComputedStyle(dropdownMenu);


dropdown.onclick = () => {
  if(dropdownMenuDisplay.display === 'none'){ 
    dropdownMenu.style.display = 'inline-flex';
  }
  else{
    dropdownMenu.style.display = 'none';
  }
}