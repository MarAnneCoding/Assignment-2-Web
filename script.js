"use strict";

// Shared by both pages. `defer` in the HTML lets the DOM load before this runs.
const themeButton = document.querySelector(".theme-toggle");
const themeStatus = document.querySelector(".theme-status");
const storageKey = "my-website-theme";

// Keep the visual theme, button state, and screen-reader message in sync.
function updateThemeControls() {
  const isDark = document.body.classList.contains("dark-mode");
  themeButton.textContent = isDark ? "Dark mode: on" : "Dark mode: off";
  themeButton.setAttribute("aria-pressed", String(isDark));
  if (themeStatus) {
    themeStatus.textContent = isDark ? "Dark theme is active." : "Light theme is active.";
  }
}

if (themeButton) {
  // Storage can be blocked (including some local-file/private browsing contexts).
  // A storage failure must not prevent the interactive controls from working.
  try {
    document.body.classList.toggle("dark-mode", localStorage.getItem(storageKey) === "dark");
  } catch (error) {
    // Keep the default light theme when a saved preference cannot be read.
  }
  updateThemeControls();
  themeButton.hidden = false;

  themeButton.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");
    updateThemeControls();
    try {
      localStorage.setItem(storageKey, isDark ? "dark" : "light");
    } catch (error) {
      // The theme still changes even when the browser cannot save the choice.
    }
  });
}

// Enhance each FAQ independently. More than one answer may be open at a time.
document.querySelectorAll(".faq-question").forEach(function (question) {
  const answer = document.getElementById(question.getAttribute("aria-controls"));
  const item = question.closest(".faq-item");
  const indicator = question.querySelector("span");
  if (!answer || !item || !indicator) return;

  answer.hidden = true;
  question.disabled = false;
  question.setAttribute("aria-expanded", "false");
  indicator.textContent = "+";

  question.addEventListener("click", function () {
    const isOpen = item.classList.toggle("active");
    answer.hidden = !isOpen;
    question.setAttribute("aria-expanded", String(isOpen));
    indicator.textContent = isOpen ? "−" : "+";
  });
});
