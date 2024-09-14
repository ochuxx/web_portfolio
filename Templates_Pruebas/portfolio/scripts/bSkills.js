<<<<<<< HEAD
const skillBlocks = document.querySelectorAll(".main-body-skills .main");
const middleBlock = document.querySelector(".main-body-skills .data_and_dev");
const blockAndClass = [[skillBlocks[0], "skill_left_active"], [skillBlocks[1], "skill_right_active"]]

blockAndClass.forEach(elements => {
    elements[0].addEventListener("mouseenter", () => {
        middleBlock.children[0].classList.toggle(elements[1]);
    });

    elements[0].addEventListener("mouseleave", () => {
        middleBlock.children[0].classList.remove(elements[1]);
    });
})

middleBlock.children[0].addEventListener("mouseenter", () => {
    let isLeft = true;

    skillBlocks.forEach(element => {
        element.classList.add("middle-hover");

        isLeft ? element.classList.add("middle-hover--left") : element.classList.add("middle-hover--right"); // Una clase tanto para el de derecha como izquierda
        isLeft = false;
    })
})

middleBlock.children[0].addEventListener("mouseleave", () => {
    skillBlocks.forEach(element => {
        element.classList.remove("middle-hover");
        element.classList.remove("middle-hover--right");
        element.classList.remove("middle-hover--left");
    })
=======
const skillBlocks = document.querySelectorAll(".main-body-skills .main");
const middleBlock = document.querySelector(".main-body-skills .data_and_dev");
const blockAndClass = [[skillBlocks[0], "skill_left_active"], [skillBlocks[1], "skill_right_active"]]

blockAndClass.forEach(elements => {
    elements[0].addEventListener("mouseenter", () => {
        middleBlock.children[0].classList.toggle(elements[1]);
    });

    elements[0].addEventListener("mouseleave", () => {
        middleBlock.children[0].classList.remove(elements[1]);
    });
})

middleBlock.children[0].addEventListener("mouseenter", () => {
    let isLeft = true;

    skillBlocks.forEach(element => {
        element.classList.add("middle-hover");

        isLeft ? element.classList.add("middle-hover--left") : element.classList.add("middle-hover--right"); // Una clase tanto para el de derecha como izquierda
        isLeft = false;
    })
})

middleBlock.children[0].addEventListener("mouseleave", () => {
    skillBlocks.forEach(element => {
        element.classList.remove("middle-hover");
        element.classList.remove("middle-hover--right");
        element.classList.remove("middle-hover--left");
    })
>>>>>>> 2847d45 (.gitignore añadido)
})