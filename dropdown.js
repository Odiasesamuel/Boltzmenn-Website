// Dropdown JS
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
  open_btn.style.opacity = "0";
  document.body.style.overflow = "hidden";
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
  open_btn.style.opacity = "1";
  document.body.style.overflow = "visible";
  btnScrollToTop.style.opacity = "1";
});

// Scroll to top button
var target = document.getElementById("target");
var scrollToTopBtn = document.querySelector("#scroll-to-top");

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      scrollToTopBtn.classList.add("showBtn");
    } else {
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

let observer = new IntersectionObserver(callback);
observer.observe(target);

// Services Dropdown Desktop/Laptop
const services_btn = document.getElementById("services-btn");
const servicesBox = document.querySelector(".services-nav");
const servicesList = document.querySelectorAll(".services-nav a");

services_btn.addEventListener("click", () => {
  services_btn.style.color = "#0c8e88";
  servicesBox.style.display = "flex";
});

document.addEventListener("click", removeServiceList);

function removeServiceList(e) {
  if (
    !e.target.classList.contains("services-nav") &&
    e.target.id != "services-btn"
  ) {
    services_btn.style.color = "#18191f";

    servicesList.forEach((service) => {
      service.classList.add("show");
    });
    setTimeout(resetServiceList, 700);
  }
}

function resetServiceList() {
  servicesBox.style.display = "none";
  servicesList.forEach((service) => {
    service.classList.remove("show");
  });
}

// Services Dropdown Tablet/Mobile
const services_btn_mobile = document.getElementById("services-btn-mobile");
const servicesBoxMobile = document.querySelector(".services-nav-mobile");
const servicesListMobile = document.querySelectorAll(".services-nav-mobile a");

services_btn_mobile.addEventListener("click", () => {
  services_btn_mobile.style.color = "#0c8e88";
  servicesBoxMobile.style.display = "flex";
});

document.addEventListener("click", removeServiceListMobile);

function removeServiceListMobile(e) {
  if (
    !e.target.classList.contains("services-nav-mobile") &&
    e.target.id != "services-btn-mobile"
  ) {
    servicesListMobile.forEach((service) => {
      service.classList.add("show");
    });
    setTimeout(resetServiceListMobile, 700);
  }
}

function resetServiceListMobile() {
  servicesBoxMobile.style.display = "none";
  servicesListMobile.forEach((service) => {
    service.classList.remove("show");
  });
}
