// Application Mobile / Small devices
// Open / Close navbar menu on click

// let triggerMobileMenu = document.querySelector(".triggerMobileMenu");
// let nav = document.querySelector(".nav");

// function openMobileMenu(){
//   nav.classList.toggle("nav__mobile__open");
// }

// triggerMobileMenu.addEventListener("click", openMobileMenu);

// Application to open submenus on click, by adding and removing a class with display none to block
// ( I want to toggle and if I open a new submenu I want also to close other opened submenus)

// let triggerOpenSubmenu = document.querySelectorAll(".navSubmenuTrigger");
// let navSubmenusGroup = document.querySelectorAll(".ulSUBMENU_withVIDEO_Wrapper");
// let nav__submenu1 = document.querySelector(".nav__submenu1");
// let nav__submenu2 = document.querySelector(".nav__submenu2");
// let header = document.querySelector(".header");
// let hero = document.querySelector(".hero");

// function openSiblingSubmenu(e){
//   e.stopPropagation();
//   if(this.children[2].classList.contains("nav__submenu2")){
//     nav__submenu1.classList.remove("open__submenu");
//   }
//   if(this.children[2].classList.contains("nav__submenu1")){
//     nav__submenu2.classList.remove("open__submenu");
//   }
//   this.children[2].classList.toggle("open__submenu");
// }

// triggerOpenSubmenu.forEach(function(eachli){
//   eachli.addEventListener("click", openSiblingSubmenu);
// });

// Close navbar submenus remote by clicking on .header or .hero
// to avoid conflict with header's children propagation of the function
// create a function for children with e.stopPropagation() // they will not inherit parents eventListener
// function closeSubmenuRemote(event){
//     nav__submenu1.classList.remove("open__submenu");
//     nav__submenu2.classList.remove("open__submenu");
// }

// header.addEventListener("click", closeSubmenuRemote);
// hero.addEventListener("click", closeSubmenuRemote);

// Application. Carousel  to show the clients' comments with animation
// by clicking the dots below the comments
// let slider = document.querySelector(".client__slider");
// slider.style.position = "relative";
// slider.style.left = "0";

// let sliderDots = document.querySelectorAll(".slider__dot");

// let comment1 = document.querySelector(".slider__dot1");
// let comment2 = document.querySelector(".slider__dot2");
// let comment3 = document.querySelector(".slider__dot3");

// // get comment 1
// function getClientComment1(){
//   slider.style.left = "0";
//   comment1.classList.add("sliderDotActive");
//   comment2.classList.remove("sliderDotActive");
//   comment3.classList.remove("sliderDotActive");
// }

// comment1.addEventListener("click", getClientComment1);

// // get comment 2
// function getClientComment2(){
//   slider.style.left = "-100%";
//   comment1.classList.remove("sliderDotActive");
//   comment2.classList.add("sliderDotActive");
//   comment3.classList.remove("sliderDotActive");
// }

// comment2.addEventListener("click", getClientComment2);

// // get comment 3
// function getClientComment3(){
//   slider.style.left = "-200%";
//   comment1.classList.remove("sliderDotActive");
//   comment2.classList.remove("sliderDotActive");
//   comment3.classList.add("sliderDotActive");
// }

// comment3.addEventListener("click", getClientComment3);
