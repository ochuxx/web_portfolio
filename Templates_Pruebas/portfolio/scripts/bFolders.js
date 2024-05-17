const carets = document.querySelectorAll(".folder_caret");
const foldersBox = document.querySelector(".main-body-projects-folders");
const foldersHighlightButton = document.querySelectorAll(".folder_highlight");
const eventClick = new MouseEvent("click");

// Watch or ocult the sub-folders
function watchSubFolders(caret) {
    if(caret.classList.contains("folder_caret-open")) {
        caret.nextElementSibling.classList.remove("fa-folder"); //Cambiar icono a abierto de carpeta
        caret.nextElementSibling.classList.remove("fa-solid");
        caret.nextElementSibling.classList.toggle("fa-folder-open");
        caret.nextElementSibling.classList.toggle("fa-regular");

        for(let i = 0; i < caret.nextElementSibling.children.length; i++) {
            caret.nextElementSibling.children[i].style.display = "grid";
        }
        return;
    }

    caret.nextElementSibling.classList.remove("fa-folder-open"); //Cambiar icono a cerrado de carpeta
    caret.nextElementSibling.classList.remove("fa-regular");
    caret.nextElementSibling.classList.toggle("fa-folder");
    caret.nextElementSibling.classList.toggle("fa-solid");

    for(let i = 0; i < caret.nextElementSibling.children.length; i++) {
        caret.nextElementSibling.children[i].style.display = "none";
    }
}

foldersHighlightButton.forEach(folderHighlightButton => {

    let caret = folderHighlightButton.nextElementSibling;

    // Si la etiqueta de al lado es un link, entonces se dispara el evento de esta
    if (caret.localName == "a") {
        folderHighlightButton.addEventListener("click", () => {
            caret.dispatchEvent(new MouseEvent("click"));
        })
        return;
    }

    folderHighlightButton.addEventListener("click", () => {
        caret.classList.toggle("folder_caret-open");
        watchSubFolders(caret);
    });

    /* DEBUGGER */
    for(let i = 0; i < caret.nextElementSibling.children.length; i++) {
        caret.nextElementSibling.children[i].style.display = "none";
    }
});

// The button's desing to watch the folders
function adjustWidthHighlight() {
    let foldersBoxWidth = foldersBox.offsetWidth;
    foldersHighlightButton.forEach(element => {
        element.style.width = `${foldersBoxWidth}px`;
    })   
}

window.addEventListener("resize", () => {
    adjustWidthHighlight();
})

adjustWidthHighlight();