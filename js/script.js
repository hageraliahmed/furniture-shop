let formSearch = document.querySelector("#form-search");
let searchIcon = document.querySelector(".search-icon");
searchIcon.addEventListener("click", function () {
  formSearch.classList.toggle("active");
});
window.addEventListener("scroll", function () {
  formSearch.classList.remove("active");
});

window.addEventListener("resize", function () {
  formSearch.classList.remove("active");
});
// start menu bar

let menuOpen = document.querySelector(".menu-icon");
let menuClose = document.querySelector(".close-icons");
let mainMenu = document.querySelector(".menu");

menuOpen.addEventListener("click", function () {
  mainMenu.style.transform = "  translateX(0%)";
});
menuClose.addEventListener("click", function () {
  mainMenu.style.transform = "  translateX(100%)";
});

// end menu bar
window.onkeydown = function (n) {
  if (n.keyCode == "27") {
    formSearch.classList.remove("active");
    mainMenu.style.transform = "  translateX(100%)";
    imageContain.style.display = "none";
    cartMenu.style.transform = "translatex(100%)";
  }
};
// cart bar

let openCart = document.querySelector(".shopping");
let cartMenu = document.querySelector(".cart");
let closeCart = document.querySelector(".close-icons-cart");
openCart.addEventListener("click", function () {
  cartMenu.style.transform = "translatex(0)";
});
closeCart.addEventListener("click", function () {
  cartMenu.style.transform = "translatex(100%)";
});
//  --------------------start header
let header = document.querySelector(".header");
let headerArray = header.querySelectorAll(".head-content");
let nextHeader = header.querySelector(".next");
let pervHeader = header.querySelector(".perv");

let a = 0;
window.onload = headerArray[a].classList.add("active");
nextHeader.addEventListener("click", function () {
  for (let i = 0; i < headerArray.length; i++) {
    headerArray[i].classList.remove("active");
  }
  if (a < headerArray.length - 1) {
    a++;
  } else {
    a = 0;
  }
  window.onload = headerArray[a].classList.add("active");
});

pervHeader.addEventListener("click", function () {
  for (let i = 0; i < headerArray.length; i++) {
    headerArray[i].classList.remove("active");
  }
  if (a > 0) {
    a--;
  } else {
    a = headerArray.length - 1;
  }
  headerArray[a].classList.add("active");
});
//  --------------------end header
// -------------- start gallery
let gallery = document.querySelector(".gallery");
let imageContain = document.querySelector(".main-img");
let gallTitle = imageContain.querySelector("h1");
let mainImg = document.querySelector(".mainImg");
let galleryArray = gallery.querySelectorAll(".gall");
let closeGallery = gallery.querySelector(".closeGallery");

for (let i = 0; i < galleryArray.length; i++) {
  galleryArray[i].addEventListener("click", openImgGall);
}

function openImgGall() {
  imageContain.style.display = "flex";

  mainImg.src = this.src;
  gallTitle.innerHTML = this.alt;
}
closeGallery.addEventListener("click", function () {
  imageContain.style.display = "none";
});
// -------------- end gallery

let offers = document.querySelector(".offers");
let offersBox = offers.querySelectorAll(".box");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 240) {
  }
  for (let i = 0; i < offersBox.length; i++) {
    if (window.pageYOffset > 240) {
      offersBox[i].style.cssText = `transform:translatey(0);
    opacity:1`;
    } else {
      offersBox[i].style.cssText = `transform:translatey(50px);
    opacity:0`;
    }
  }
});
