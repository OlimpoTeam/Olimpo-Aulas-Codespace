/* Declarations:
==========================================================================================*/
    /* HTML Variables:
    ======================================================================================*/
    export const body = document.body;
    export const html = document.querySelector('html');

/* Imports:
==========================================================================================*/
/* Loading Screen:
======================================================================================*/
    import { loadingScreen } from './modules/loadingScreen.mjs';

/* Scroll Up:
======================================================================================*/
    import { scroll_up } from './modules/scrollUp.mjs';

/* Theme Color:
======================================================================================*/
    //import theme from './modules/themeColor.js';

/* Contact Form:
======================================================================================*/
    import { showMenu } from "./modules/hamburguer-menu.mjs";

/* Contact Form:
======================================================================================*/
    import { formSubmit } from "./modules/contactForm.mjs";

/* Processing:
==========================================================================================*/
/* Window Loading:
======================================================================================*/        
    window.onload = () => {
        loadingScreen();
    }

/* Event listeners:
======================================================================================*/
    /* Scroll Up Button:
    ==================================================================================*/
        const btnTheme = body.querySelector('#theme');
        btnTheme.addEventListener('click', scroll_up);

    /* Start Page - Hamburguer Menu:
    ==================================================================================*/
        if(document.URL.includes("index.html")) {
            const startMenu = body.querySelector('#start-page-header-menu-hamburguer');

            startMenu.addEventListener('click', () => {
                showMenu(startMenu);
            })
        }
        

    /* Contact Form - Submit Function:
    ==================================================================================*/
        if(document.URL.includes("contato.html")) {
            const contactForm = body.querySelector("#contact-form");

            contactForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const form = event.currentTarget;
                formSubmit(form);
            })
        }