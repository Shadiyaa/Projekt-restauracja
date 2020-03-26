(() => {
    const button = document.querySelector(".mainNavigationButton");
    const menu = document.querySelector(".mainNavigationMenu");

    const toogleClass = () => {
        menu.classList.toggle("mainNavigationMenu--open");
    }

    button.addEventListener("click", toogleClass);
    menu.addEventListener("click", toogleClass);
})();