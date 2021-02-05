(function () {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header_activ");
        } else {
            header.classList.remove("header_activ");
            }
    }
}());

(function () {
    const burgerItem = document.querySelector(".burger");
    const menu = document.querySelector(".header_now");
    const menuCloseItem = document.querySelector(".header_nav-close");
    burgerItem.addEventListener("click", () => {
        console.log('kek')
        menu.classList.add("header_now_active");
    });
    menuCloseItem.addEventListener("click", () => {
        menu.classList.remove("header_now_active");
    });
    }());