{
    const changeColor = document.querySelector(".js-changeColorButton");
    const showHidden = document.querySelector(".js-orderButton");
    const hidden = document.querySelector(".js-section__orderButton--hidden");
    
    const onChangeColorClick = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const headerElement = document.querySelector(".js-header");
        headerElement.style.color = "#" + randomColor;
    };

    

    const onShowHiddenClick = () => {
        hidden.classList.toggle("section__orderButton--hidden");
        showHidden.innerText = hidden.classList.contains("section__orderButton--hidden") ? "Zamów" : "Schowaj";
    };

    const init = () => {
        changeColor.addEventListener("click", onChangeColorClick);
        showHidden.addEventListener("click", onShowHiddenClick);
    };

    init();
}