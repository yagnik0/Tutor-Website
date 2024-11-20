// Toggle mobile menu :-

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

// Change navbar background on scroll :-

window.addEventListener("scroll", function () {
    const navbar = document.querySelector('.navbar')
//   console.log(window.scrollY);
    if (window.scrollY > 0) {
    //   console.log(scrollY);
        navbar.classList.add('navbar-scroll')
    } else {
        navbar.classList.remove('navbar-scroll')
    }
});
