const carets = document.querySelectorAll(".folder_caret");
const foldersBox = document.querySelector(".main-body-projects-folders");
const foldersHighlightButton = document.querySelectorAll(".folder_highlight");
const eventClick = new MouseEvent("click");

// Watch or ocult the sub-folders
function watchSubFolders(caret) {
    // Left line to identify the folder children
    //let parent = caret.parentElement;
    //if (parent.localName == "div") {
    //    parent.style.borderLeft = "0.1rem solid blue";
    //}

    if(caret.classList.contains("folder_caret-open")) {
        caret.nextElementSibling.classList.remove("fa-folder"); //Change folder icon (opened)
        caret.nextElementSibling.classList.remove("fa-solid");
        caret.nextElementSibling.classList.toggle("fa-folder-open");
        caret.nextElementSibling.classList.toggle("fa-regular");

        for(let i = 0; i < caret.nextElementSibling.children.length; i++) {
            caret.nextElementSibling.children[i].style.display = "grid";
        }
        return;
    }

    //parent.style.border = "unset"; // Quit the left line
    caret.nextElementSibling.classList.remove("fa-folder-open"); //Change folder icon (closed)
    caret.nextElementSibling.classList.remove("fa-regular");
    caret.nextElementSibling.classList.toggle("fa-folder");
    caret.nextElementSibling.classList.toggle("fa-solid");

    for(let i = 0; i < caret.nextElementSibling.children.length; i++) {
        caret.nextElementSibling.children[i].style.display = "none";
    }
}

// The button's desing to watch the folders
function adjustWidthHighlight() {
    let foldersBoxWidth = foldersBox.offsetWidth;
    foldersHighlightButton.forEach(element => {
        element.style.width = `${foldersBoxWidth}px`;
    })   
}

foldersHighlightButton.forEach(folderHighlightButton => {

    let caret = folderHighlightButton.nextElementSibling;

    // Si la etiqueta de al lado es un link, entonces se dispara el evento de esta
    if (caret.localName == "a") {
        folderHighlightButton.style.cursor = "pointer";

        folderHighlightButton.addEventListener("click", () => {
            caret.dispatchEvent(new MouseEvent("click"));
        })

        folderHighlightButton.addEventListener("mouseenter", () => {
            caret.classList.toggle("link_hover");
        })

        folderHighlightButton.addEventListener("mouseleave", () => {
            caret.classList.remove("link_hover");
        })
        return;
    }

    folderHighlightButton.addEventListener("click", () => {
        caret.classList.toggle("folder_caret-open");
        watchSubFolders(caret);
    });

    // Esconder carpetas para después abrirlas
    for(let i = 0; i < caret.nextElementSibling.children.length; i++) {
        caret.nextElementSibling.children[i].style.display = "none";
    }
});

window.addEventListener("resize", () => {
    adjustWidthHighlight();
})

adjustWidthHighlight();