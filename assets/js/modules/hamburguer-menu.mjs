export function showMenu(menu) {
    console.log('clicked!')
    const hamburguer = document.querySelector('.hamburguer');
    const header = document.querySelector('header');
    const navBar = document.querySelector('nav');
    const links = document.querySelector('ul');

    if (header.classList.contains('mobile-header')) {
        hamburguer.className += " fa-bars";
        hamburguer.classList.remove('fa-close');

        header.classList.remove('mobile-header');

        navBar.className += ' start-page-header-nav';
        navBar.classList.remove('mobile-nav');

        links.classList.remove('mobile-links');

        closeBnt.classList.remove('show-close-icon');

    } else {
        hamburguer.classList.remove('fa-bars');
        hamburguer.className += " fa-close";

        header.className += ' mobile-header';

        navBar.className += ' mobile-nav';
        navBar.classList.remove('start-page-header-nav');

        links.className += ' mobile-links';

        closeBnt.className += ' show-close-icon';
    }
}