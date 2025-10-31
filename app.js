// app.js

document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Navigation Toggle ---
  const mobileNavBtn = document.querySelector(".btn-mobile-nav");
  const body = document.body;
  const primaryNav = document.getElementById("primary-nav");

  if (mobileNavBtn) {
    mobileNavBtn.addEventListener("click", () => {
      const isNavOpen = body.classList.toggle("nav-open");
      mobileNavBtn.setAttribute("aria-expanded", isNavOpen);
    });
  }

  // --- Smooth Scroll & Close Mobile Nav ---
  // Close mobile nav when a nav link is clicked
  if (primaryNav) {
    primaryNav.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        if (body.classList.contains("nav-open")) {
          body.classList.remove("nav-open");
          mobileNavBtn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // --- Footer Year ---
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
