const dropdown = document.querySelector(".dropdown");
const select = document.querySelector(".select_drop");
const selected = document.querySelector(".selected_drop");
const caret = document.querySelector(".caret_drop");
const option = document.querySelector(".option_drop");
const options = document.querySelectorAll(".option_drop li");
const active = document.querySelector(".active_drop");

select.addEventListener("click", () => {
    select.classList.toggle("select_drop-clicked");
    caret.classList.toggle("caret_drop-rotate");
    option.classList.toggle("option_drop-open");
});

options.forEach(element => {

    element.addEventListener("click", () => {
        selected.innerText = element.innerText;
        select.classList.remove("select_drop-clicked");
        caret.classList.remove("caret_drop-rotate");
        option.classList.remove("option_drop-open");

        options.forEach(element2 => {
            element2.classList.remove("active_drop");
        });

        element.classList.add("active_drop");
    });
});
