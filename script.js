document.documentElement.classList.add("js");

const menuButton = document.querySelector(".pf-menu");
const menuLinks = document.querySelector(".pf-links");

if (menuButton && menuLinks) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuLinks.classList.remove("pf-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    menuLinks.classList.toggle("pf-open", !isOpen);
  });

  menuLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const revealItems = document.querySelectorAll(".pf-reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pf-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px" },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("pf-visible"));
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

const plannerShot = document.querySelector("#planner-shot");
const plannerTabs = document.querySelectorAll(".pf-shot-tab");

if (plannerShot && plannerTabs.length) {
  plannerTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      plannerShot.src = tab.dataset.src;
      plannerShot.alt = tab.dataset.alt;
      plannerTabs.forEach((item) => item.setAttribute("aria-pressed", String(item === tab)));
    });
  });
}
