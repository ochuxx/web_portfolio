const titlesAndAttributes = [["Web", "4.34", "450", "3"], ["Analyst", "9", "1000", "7"], ["Dev", "4.34", "450", "3"]];
const nSpanTitle = document.querySelector("#typing_effect_title");
let titleSelected = 0

nSpanTitle.innerHTML = titlesAndAttributes[titleSelected][0];

const cssCode = `
#typing_effect_title {
    display: block;
    white-space: nowrap;
    border-right: 0.3rem solid;
    width: ${titlesAndAttributes[titleSelected][1]}rem;

    animation: typing ${titlesAndAttributes[titleSelected][2]}ms steps(${titlesAndAttributes[titleSelected][3]}), blink .5s infinite step-end alternate;
    overflow: hidden;
}

@keyframes typing {
    from { width: 0; }
}

@keyframes blink {
    50% { border-color: transparent; }
}
`;

let lStyle = document.createElement("style");
lStyle.append(cssCode);
document.head.appendChild(lStyle);

setTimeout(() => {
    document.head.removeChild(lStyle);
}, 9000)

setInterval(() => {
    titleSelected++;
    if (titleSelected == 3) {
        titleSelected = 0;
    }
    const cssCode = `
        #typing_effect_title {
            display: block;
            white-space: nowrap;
            border-right: 0.3rem solid;
            width: ${titlesAndAttributes[titleSelected][1]}rem;
        
            animation: typing ${titlesAndAttributes[titleSelected][2]}ms steps(${titlesAndAttributes[titleSelected][3]}), blink .5s infinite step-end alternate;
            overflow: hidden;
        }
        
        @keyframes typing {
            from { width: 0; }
        }
        
        @keyframes blink {
            50% { border-color: transparent; }
        }
    `;
    lStyle.append(cssCode);

    setTimeout(() => {
        nSpanTitle.innerHTML = titlesAndAttributes[titleSelected][0];
        document.head.appendChild(lStyle);
        setTimeout(() => {
            document.head.removeChild(lStyle);
        }, 9000)
    }, 50)
}, 30000)