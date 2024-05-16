const dropdown = document.querySelector(".dropdown");
const select = document.querySelector(".select_drop");
const selected = document.querySelector(".selected_drop");
const caret = document.querySelector(".caret_drop");
const option = document.querySelector(".option_drop");
const options = document.querySelectorAll(".option_drop li");
const active = document.querySelector(".active_drop");

// If the dropmenu is active and the click is out of this
window.addEventListener("click", (e) => {
    if (e.target.className != "select_drop select_drop-clicked"
    && e.target.className != "selected_drop"
    && e.target.className != "caret_drop caret_drop-rotate"
    && select.classList.contains("select_drop-clicked")) {
        //The menu is off
        select.classList.remove("select_drop-clicked");
        caret.classList.remove("caret_drop-rotate");
        option.classList.remove("option_drop-open");
    }
})

// Dropdown menu functions
select.addEventListener("click", () => {
    select.classList.toggle("select_drop-clicked");
    caret.classList.toggle("caret_drop-rotate");
    option.classList.toggle("option_drop-open");
});

options.forEach(element => {
    element.addEventListener("click", () => {
        select.classList.remove("select_drop-clicked");
        caret.classList.remove("caret_drop-rotate");
        option.classList.remove("option_drop-open");
    });
});

//selected_drop caret_drop caret_drop-rotate