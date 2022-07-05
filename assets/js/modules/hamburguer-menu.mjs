export function showMenu(menu) {
    const hamburguer = document.querySelector('.hamburguer');
    const header = document.querySelector('header');
    const navBar = document.querySelector('nav');
    const links = document.querySelector('ul');

    if (header.classList.contains('mobile-header')) 
    {
        hamburguer.className += " fa-bars";
        hamburguer.classList.remove('fa-close');

        header.classList.remove('mobile-header');

        navBar.className += ' start-page-header-nav';
        navBar.classList.remove('mobile-nav');

        links.classList.remove('mobile-links');

    }
    else 
    {
        hamburguer.classList.remove('fa-bars');
        hamburguer.className += " fa-close";

        header.className += ' mobile-header';

        navBar.className += ' mobile-nav';
        navBar.classList.remove('start-page-header-nav');

        links.className += ' mobile-links';
    }
}