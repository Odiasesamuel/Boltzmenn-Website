// Dropdown JS
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const btnScrollToTop = document.getElementById('scroll-to-top');

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
  open_btn.style.opacity = "0";
  document.body.style.overflow = 'hidden';
  btnScrollToTop.style.opacity = '0'
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
  open_btn.style.opacity = "1";
  document.body.style.overflow = 'visible';
  btnScrollToTop.style.opacity = '1'
});



// Scroll to top
btnScrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
})
