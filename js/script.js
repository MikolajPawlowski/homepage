{
    const changeColor = document.querySelector(".js-changeColor");

    const onChangeColorClick = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const header = document.querySelector(".js-header");
        header.style.color = "#" + randomColor;
    };

    const showHidden = document.querySelector(".js-showHidden");
    const hidden = document.querySelector(".js-section__hidden");

    const onShowHiddenClick = () => {
        hidden.classList.toggle("section__hidden");
        showHidden.innerText = hidden.classList.contains("section__hidden") ? "Zamów" : "Schowaj";
    };

    const init = () => {
        changeColor.addEventListener("click", onChangeColorClick);
        showHidden.addEventListener("click", onShowHiddenClick);
    };

    init();
}