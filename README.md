# Assignment 3: Enhancing My Website with JavaScript

Open `index.html` in a browser. No installation or build step is required.

## Files

- `index.html`: home page, preserving the original About and Projects text.
- `projects.html`: second styled page and JavaScript FAQ accordion.
- `style.css`: shared responsive styling and light/dark themes.
- `script.js`: commented DOM interactions used by both pages.
- `REFLECTION.txt`: short reflection and AI disclosure.

## Assignment 2 foundation

This project extends the local Assignment 2 artifact dated October 10, 2026, from `students-will-enhance-the-structure-of/outputs/assignment-2`. The connected `MarAnneCoding/Assignment-2-Web` repository was empty when inspected. No verified Anne Café or INF-225 source was found in the accessible project files or connected repositories. The existing generic website was therefore reused rather than presenting a newly invented café site as the original.

## How the JavaScript meets the rubric

1. `querySelector()` locates the theme button and status; `querySelectorAll()` locates FAQ buttons.
2. `addEventListener("click", ...)` responds to actual user actions.
3. `classList.toggle()` changes the theme and the active FAQ style.
4. `textContent` updates the theme label, status, and FAQ plus/minus indicators.
5. `hidden`, `aria-pressed`, and `aria-expanded` keep visible and accessible states synchronized.

There is no form, so form validation and `preventDefault()` are not applicable.

## Try it

1. Open Home and click **Dark mode: off**. The palette and status should change.
2. Open Projects & FAQ. With storage available, dark mode should persist; refresh to check again.
3. Toggle back to light mode.
4. Open and close each FAQ. Its answer and plus/minus symbol should change together.
5. Use Tab, Enter, and Space to operate the buttons.
6. Check a narrow window. Cards should stack without horizontal scrolling.
7. Disable JavaScript and reload: the page links and all FAQ answers remain readable.

Storage restrictions do not break the switcher; they only prevent remembering the choice. Persistence across local `file:` pages depends on browser behavior; HTTP hosting provides a shared origin.

Read `REFLECTION.txt`, understand the code, and follow your course's AI-use rules before submitting.
