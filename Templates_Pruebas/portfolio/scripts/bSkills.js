const skillBlocks = document.querySelectorAll(".main-body-skills .main");

skillBlocks.forEach(element => {
    element.addEventListener("mouseenter", () => {
        var timerBorder1 = setTimeout(() => {
            element.classList.toggle("border_top_bot_hover");
        }, 500);
    })

    element.addEventListener("mouseleave", () => {
        clearTimeout(timerBorder1);
        element.classList.remove("border_top_bot_hover");
    })
})