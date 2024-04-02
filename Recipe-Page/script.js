document.addEventListener('DOMContentLoaded', () => {

    let root = document.querySelector('html');
    let button = document.querySelector('button');
    button.innerHTML = "<i class='bx bx-sun' ></i>";
    let themeSwap = false;

    button.addEventListener('click', () => {
        if (themeSwap == false) {
            root.className = 'dark';
            button.innerHTML = "<i class='bx bx-moon' ></i>";
            themeSwap = true;
        }
        else {
            root.className = 'light';
            button.innerHTML = "<i class='bx bx-sun' ></i>"
            themeSwap = false;
        }
    })

    let pageContent = document.getElementsByClassName('Main Content Display')
    pageContent[0].style.opacity = "0"

    document.addEventListener('scroll', (e) => {
        console.log(window.scrollY)
        if (window.scrollY == 3) {
            pageContent[0].style.opacity = '0.2'
        }
        if (window.scrollY == 7) {
            pageContent[0].style.opacity = '0.3'
        }
        if (window.scrollY = 21) {
            pageContent[0].style.opacity = '0.4'
        }
        if (window.scrollY = 35) {
            pageContent[0].style.opacity = '0.5'
        }
        if (window.scrollY = 49) {
            pageContent[0].style.opacity = '0.6'
        }
        if (window.scrollY = 56) {
            pageContent[0].style.opacity = '0.7'
        }
    })

})
