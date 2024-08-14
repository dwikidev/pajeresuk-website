let dropdown = document.querySelector(".dropdown-res");
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