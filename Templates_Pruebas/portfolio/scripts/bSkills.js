const skillBlocks = document.querySelectorAll(".main-body-skills .main");
const middleBlock = document.querySelector(".main-body-skills .data_and_dev");


skillBlocks[0].addEventListener("mouseenter", () => {
    middleBlock.children[0].classList.toggle("skill_left_active");
});

skillBlocks[0].addEventListener("mouseleave", () => {
    middleBlock.children[0].classList.remove("skill_left_active");
});

skillBlocks[1].addEventListener("mouseenter", () => {
    middleBlock.children[0].classList.toggle("skill_right_active");
});

skillBlocks[1].addEventListener("mouseleave", () => {
    middleBlock.children[0].classList.remove("skill_right_active");
});