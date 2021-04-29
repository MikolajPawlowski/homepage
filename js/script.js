{
    const welcome = () => {
        console.log("Hello there!");
    }

    const onChangeColorClick = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        header.style.color = "#" + randomColor;
    };

    const onShowHiddenClick = () => {
        hidden.classList.toggle("section__hidden");
        showHidden.innerText = showHidden.innerText === hideText ? showText : hideText;
    };

    welcome();

    const changeColor = document.querySelector(".js-changeColor");
    const header = document.querySelector(".js-header");

    changeColor.addEventListener("click", onChangeColorClick);

    const showHidden = document.querySelector(".js-showHidden");
    const hidden = document.querySelector(".js-section__hidden");

    const showText = "Zamów";
    const hideText = "Schowaj"
    showHidden.addEventListener("click", onShowHiddenClick);
}