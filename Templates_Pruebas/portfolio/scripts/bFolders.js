const carets = document.querySelectorAll(".folder_caret");

// Watch or ocult the sub-folders
function watchSubFolders(caret) {
    if(caret.classList.contains("folder_caret-open")) {
        for(let i = 0; i < caret.nextElementSibling.children.length; i++) {
            caret.nextElementSibling.children[i].style.display = "flex";
        }
        return;
    }

    for(let i = 0; i < caret.nextElementSibling.children.length; i++) {
        caret.nextElementSibling.children[i].style.display = "none";
    }
}

carets.forEach(caret => {
    caret.addEventListener("click", () => {
        caret.classList.toggle("folder_caret-open");
        watchSubFolders(caret);
    });

    /* OCULTAR TODO
    for(let i = 0; i < caret.nextElementSibling.children.length; i++) {
        caret.nextElementSibling.children[i].style.display = "none";
    }
    */
});