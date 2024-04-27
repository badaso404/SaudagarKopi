// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik untuk diluar sidebar

const hamburger = document.querySelector("#hamburger-menu");
const shopping = document.querySelector("#shopping-cart");
const search = document.querySelector("#search");

document.addEventListener("click", function (e) {
  if (
    !hamburger.contains(e.target) &&
    !navbarNav.contains(e.target) &&
    !shopping.contains(e.target) &&
    !search.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }
});
