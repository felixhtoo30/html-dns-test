if (window.innerWidth >= 992) {
    document.querySelector('.header .header__logo img').src = './assets/images/dns_logo_lg.png';
    document.querySelector('.nav__menu').style.display = 'none';
    document.querySelector('.nav__wrapper').classList.remove("mobile", "shadow-xl", "off");
} else {
    document.querySelector('.header .header__logo img').src = './assets/images/dns_logo_sm.png';
    document.querySelector('.nav__menu').style.display = 'block';
    document.querySelector('.nav__wrapper').classList.add("mobile", "shadow-xl", "off");
}

window.addEventListener('resize', () => {

    if (window.innerWidth >= 992) {
        document.querySelector('.header .header__logo img').src = './assets/images/dns_logo_lg.png';
        document.querySelector('.nav__menu').style.display = 'none';
        document.querySelector('.nav__wrapper').classList.remove("mobile", "shadow-xl", "off");
    } else {
        document.querySelector('.header .header__logo img').src = './assets/images/dns_logo_sm.png';
        document.querySelector('.nav__menu').style.display = 'block';
        document.querySelector('.nav__wrapper').classList.add("mobile", "shadow-xl", "off");
    }
});

document.querySelector('.nav__menu').addEventListener("click", () => {
    document.querySelector('.nav__wrapper').classList.toggle('off');
});