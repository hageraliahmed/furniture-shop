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
// start about

// end end

// read-more
let blog = document.querySelector(".blog");
let blogContent = blog.querySelector(".content");

blogContent.addEventListener("click", function (n) {
  let desc = n.target.nextElementSibling;

  if ((n.target.nodeName = "BUTTON")) {
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  }
});
