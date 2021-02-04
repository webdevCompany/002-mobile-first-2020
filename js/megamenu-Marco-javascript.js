// OPEN CLOSE NAVBAR BY CLICKING HAMBURGER ICON MENU ON SMALL DEVICES
const toggleNavbar = document.querySelector('.toggleIconNavbar')
const nav = document.querySelector('.nav')

function openCloseNavbar() {
  nav.classList.toggle('show_Hide_Navbar_On_Mobile')
}

toggleNavbar.addEventListener('click', openCloseNavbar)
// end

// OPEN CLOSE AND TOGGLE NAVBAR SUBMENUS
// click on nav__ul__li to open block with 4 menus ---ulListOfSubmenus

const parentMegaMenu = document.querySelector('.parentMegaMenu')
const parentMegaMenuIcon = document.querySelector('.parentMegaMenuIcon')
const ulListOfSubmenus = document.querySelector('.ulListOfSubmenus')

function openMegamenuSmallDevices(event) {
  event.preventDefault()
  if (
    event.target.classList.contains('parentMegaMenu') ||
    event.target.classList.contains('parentMegaMenuIcon')
  ) {
    ulListOfSubmenus.classList.toggle('show_all_submenus')
  }
}

parentMegaMenu.addEventListener('click', openMegamenuSmallDevices)

// and now a function to click on the icon to open the MegaMenu

//////////////////////////////////////////////////////////////////////////////////////////////
// Open / Close Mega Submenu by clicking on its title
// giving the target element sibling a toggle class and at the same time
// removing that class to the other submenus.

const submenu = document.querySelectorAll('.submenu')

const submenuTitleNOTH3 = document.querySelectorAll('.submenuTitle')

function openMegaSubmenu(e) {
  // submenuTitleNOTH3.forEach(function(eachOne){
  //   if(eachOne !== e.target){
  //     eachOne.parentNode.children[1].classList.remove("showHide2");
  //     console.log(eachOne.parentNode.children[1]);
  //   }else {
  //     eachOne.parentNode.children[1].classList.toggle("showHide2");
  //     console.log(eachOne.parentNode.children[1]);
  //   }
  // });

  submenuTitleNOTH3.forEach(function (eachOne) {
    if (eachOne === e.target) {
      eachOne.parentNode.children[1].classList.toggle('open_close_submenu_mobile')
      console.log(eachOne.parentNode.children[1])
    }
  })
}

submenuTitleNOTH3.forEach(function (neon) {
  neon.addEventListener('click', openMegaSubmenu)
})
