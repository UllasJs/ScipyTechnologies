const toglleBtn = document.getElementById("toggle-service");
const toglleBtnlast = document.getElementById("toggle-service::after");
const menu = document.getElementById("menu");
const arrowdown = document.querySelector(".serv-arrow");

toglleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  arrowdown.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".sidebar li a");

  function setActiveLink() {
    const page = window.location.pathname.split("/").pop(); // Get the current page's filename
    menuItems.forEach((item) => {
      const dataPage = item.getAttribute("data-page");
      if (page === dataPage) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  setActiveLink(); // Set the initial "active" class

  // Add a click event listener to each menu item
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
});
