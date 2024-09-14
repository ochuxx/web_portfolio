<<<<<<< HEAD
const titles = ["Web", "Analyst", "Dev"];
const nSpanTitle = document.querySelector("#typing_effect_title");
let indexTitle = 0;

function setTextAnimation() {
    indexTitle++;
    if (indexTitle == titles.length) {indexTitle = 0};
    let title = titles[indexTitle];
    nSpanTitle.innerHTML = "";

    let setTextInterval = setInterval(() => {
        let lenSpan = nSpanTitle.innerHTML.length;
        if (lenSpan == title.length) {
            clearInterval(setTextInterval);
            activeAnimations();
        }

        //Setting
        nSpanTitle.innerHTML += title.slice(lenSpan, lenSpan + 1);
    }, 230);
}

function deleteTextAnimation() {
    let deleteTextInterval = setInterval(() => {
        let lenSpan = nSpanTitle.innerHTML.length;
        if (lenSpan == 0) {
            clearInterval(deleteTextInterval);
            setTextAnimation();
        }

        // Cutting up
        nSpanTitle.innerHTML = nSpanTitle.innerHTML.slice(0, lenSpan - 1);
    }, 230);
}

//Timeout to start the animation of change text
function activeAnimations() {
    setTimeout(() => {
        deleteTextAnimation();
    }, 2000);
}

=======
const titles = ["Web", "Analyst", "Dev"];
const nSpanTitle = document.querySelector("#typing_effect_title");
let indexTitle = 0;

function setTextAnimation() {
    indexTitle++;
    if (indexTitle == titles.length) {indexTitle = 0};
    let title = titles[indexTitle];
    nSpanTitle.innerHTML = "";

    let setTextInterval = setInterval(() => {
        let lenSpan = nSpanTitle.innerHTML.length;
        if (lenSpan == title.length) {
            clearInterval(setTextInterval);
            activeAnimations();
        }

        //Setting
        nSpanTitle.innerHTML += title.slice(lenSpan, lenSpan + 1);
    }, 230);
}

function deleteTextAnimation() {
    let deleteTextInterval = setInterval(() => {
        let lenSpan = nSpanTitle.innerHTML.length;
        if (lenSpan == 0) {
            clearInterval(deleteTextInterval);
            setTextAnimation();
        }

        // Cutting up
        nSpanTitle.innerHTML = nSpanTitle.innerHTML.slice(0, lenSpan - 1);
    }, 230);
}

//Timeout to start the animation of change text
function activeAnimations() {
    setTimeout(() => {
        deleteTextAnimation();
    }, 2000);
}

>>>>>>> 2847d45 (.gitignore añadido)
activeAnimations();