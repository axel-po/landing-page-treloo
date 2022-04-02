//animation nav bar
function animationNavbar() {
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.classList.add("nav--active");
    } else {
      nav.classList.remove("nav--active");
    }
  });
}
animationNavbar();

/* Animations */
const offersBoxs = document.querySelectorAll(".offers__content");
gsap.to(offersBoxs, {
  duration: 1,
  autoAlpha: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".offers .title",
    start: "top center",
  },
});

const travelImg = document.querySelector(".travel__img");
// const TL = gsap.timeline();
const travalTxt = document.querySelector(".traval__txt");

gsap.to(travelImg, {
  duration: 1,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".travel",
    // markers: true,
    start: "top 40%",
  },
});

gsap.to(travalTxt, {
  duration: 1,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".travel__txt",
    // markers: true,
    start: "top 40%",
  },
});
