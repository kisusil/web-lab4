function addMouseEventListeners(stroke, fill, elIndex) {
    fill.addEventListener("mouseenter", (e) => {
        if (window.ELEMENTS_STATE[elIndex] === 0) {
            stroke.style.opacity = "1.0";
            fill.style.fillOpacity = "0.2";
            fill.style.opacity = "1.0";
            fill.style.cursor = "pointer";
        }

        let canvas = document.getElementById("canvas");
        let tooltip = document.getElementById("tooltip-" + elIndex);
        if (!tooltip) {
            tooltip = document.createElement("div");
            tooltip.id = "tooltip-" + elIndex;
            tooltip.className = "tooltip";
            tooltip.innerHTML = "<h3>" + window.ELEMENTS_TITLES[elIndex] + "</h3><span>" + window.ELEMENTS_TEXTS[elIndex] + "</span>";

            canvas.addEventListener("mousemove", (e) => {
                tooltip.style.left = "" + (e.clientX - 120);
                tooltip.style.top = "" + (e.clientY - 110);
            });

            canvas.appendChild(tooltip);
        }
    });
    fill.addEventListener("mouseleave", (e) => {
        if (window.ELEMENTS_STATE[elIndex] === 0) {
            stroke.style.opacity = "0";
            fill.style.fillOpacity = "0";
            fill.style.opacity = "0";
            fill.style.cursor = "auto";
        }

        let canvas = document.getElementById("canvas");
        let tooltip = document.getElementById("tooltip-" + elIndex);
        if (tooltip) {
            canvas.removeChild(tooltip);
        }
    });
    fill.onclick = () => {
        if (window.ELEMENTS_STATE[elIndex] === 0) {
            window.ELEMENTS_STATE[elIndex] = 1;
            stroke.style.opacity = "1.0";
            fill.style.fillOpacity = "0.2";
            fill.style.opacity = "1.0";
        } else {
            window.ELEMENTS_STATE[elIndex] = 0;
            stroke.style.opacity = "0";
            fill.style.fillOpacity = "0";
            fill.style.opacity = "0";
        }
    };
}

window.onload = () => {
    window.ELEMENTS_STATE = [
        0,0,0,0,0,0,0,0,0,0,0,0
    ];
    window.ELEMENTS_TITLES = [
        "Одеялко",
        "Коврик",
        "Компьютерное кресло",
        "Шкафчик",
        "Компьютер",
        "Картина &#171;Тандзиро&#187;",
        "Картина &#171;Мудзан&#187;",
        "Картина &#171;Дзеницу&#187;",
        "Подушка",
        "Ваза",
        "Мусорное ведро",
        "Книжки"
    ]
    window.ELEMENTS_TEXTS = [
        "Защита ваших ног от бабайки",
        "Защита пола от колёсиков",
        "Забота о вашей спине",
        "Защита ваших вещей от пыли",
        "Шумное ведро с болтами",
        "Гг Истребителя демонов",
        "Злодей Истребителя демонов",
        "Друг гг Истребителя демонов",
        "Для ваших сладких сновидений",
        "Для женского счастья",
        "Для скомканных бумажек",
        "Для ценителей бумаги"
    ]

    let blanketStroke = document.getElementById("blanket-stroke");
    let blanketFill = document.getElementById("blanket-fill");
    addMouseEventListeners(blanketStroke, blanketFill, 0);

    let carpetStroke = document.getElementById("carpet-stroke");
    let carpetFill = document.getElementById("carpet-fill");
    addMouseEventListeners(carpetStroke, carpetFill, 1);

    let chairStroke = document.getElementById("chair-stroke");
    let chairFill = document.getElementById("chair-fill");
    addMouseEventListeners(chairStroke, chairFill, 2);

    let closetStroke = document.getElementById("closet-stroke");
    let closetFill = document.getElementById("closet-fill");
    addMouseEventListeners(closetStroke, closetFill, 3);

    let computerStroke = document.getElementById("computer-stroke");
    let computerFill = document.getElementById("computer-fill");
    addMouseEventListeners(computerStroke, computerFill, 4);

    let painting1Stroke = document.getElementById("painting-1-stroke");
    let painting1Fill = document.getElementById("painting-1-fill");
    addMouseEventListeners(painting1Stroke, painting1Fill, 5);

    let painting2Stroke = document.getElementById("painting-2-stroke");
    let painting2Fill = document.getElementById("painting-2-fill");
    addMouseEventListeners(painting2Stroke, painting2Fill, 6);

    let painting3Stroke = document.getElementById("painting-3-stroke");
    let painting3Fill = document.getElementById("painting-3-fill");
    addMouseEventListeners(painting3Stroke, painting3Fill, 7);

    let pillowStroke = document.getElementById("pillow-stroke");
    let pillowFill = document.getElementById("pillow-fill");
    addMouseEventListeners(pillowStroke, pillowFill, 8);

    let vaseStroke = document.getElementById("vase-stroke");
    let vaseFill = document.getElementById("vase-fill");
    addMouseEventListeners(vaseStroke, vaseFill, 9);

    let binStroke = document.getElementById("bin-stroke");
    let binFill = document.getElementById("bin-fill");
    addMouseEventListeners(binStroke, binFill, 10);

    let booksStroke = document.getElementById("books-stroke");
    let booksFill = document.getElementById("books-fill");
    addMouseEventListeners(booksStroke, booksFill, 11);

    let allElementsArray = [
        blanketStroke,
        blanketFill,
        carpetStroke,
        carpetFill,
        chairStroke,
        chairFill,
        closetStroke,
        closetFill,
        computerStroke,
        computerFill,
        painting1Stroke,
        painting1Fill,
        painting2Stroke,
        painting2Fill,
        painting3Stroke,
        painting3Fill,
        pillowStroke,
        pillowFill,
        vaseStroke,
        vaseFill,
        binStroke,
        binFill,
        booksStroke,
        booksFill
    ];

    let i = 0;
    while (i < allElementsArray.length) {
        allElementsArray[i].style.opacity = "0";
        allElementsArray[i].style.fillOpacity = "0";
        i++;
    }
};