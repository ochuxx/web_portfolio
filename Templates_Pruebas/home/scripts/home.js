// Responsive

window.addEventListener("resize", () => {
    let titlesBox = document.querySelector(".main-body-info");
    let imgsBox = document.querySelector(".main-body-imgs");
    let titlesRect = titlesBox.getBoundingClientRect();
    let imgsRect = imgsBox.getBoundingClientRect();

    if (imgsRect.left == titlesRect.right) {
        console.log(window.innerWidth);
    }
});