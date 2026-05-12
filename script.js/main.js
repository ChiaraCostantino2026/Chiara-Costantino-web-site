// ═══════════════════════════════
//  HAMBURGER MENU
// ═══════════════════════════════
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  function closeMenu() {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
  }

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });
}

// ═══════════════════════════════
//  NAVBAR SHADOW ON SCROLL
// ═══════════════════════════════
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.style.boxShadow =
    window.scrollY > 20 ? "0 2px 20px rgba(0,0,0,0.06)" : "none";
});

// ═══════════════════════════════
//  INTERSECTION OBSERVER FOR FADE
// ═══════════════════════════════
let observer;
function triggerFadeUps() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
  );
  document.querySelectorAll(".page.active .fade-up").forEach((el) => {
    el.classList.remove("visible");
    observer.observe(el);
  });
}

// Init on load
window.addEventListener("DOMContentLoaded", () => {
  triggerFadeUps();
});
