const skillBlocks = document.querySelectorAll(".main-body-skills .main");

skillBlocks.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.classList.toggle("block_hover");
    })

    element.addEventListener("mouseleave", () => {
        element.classList.remove("block_hover");
    })
})