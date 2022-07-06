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
    import { themeChosen, setTheme, changeTheme } from './modules/themeColor.mjs';

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
            changeTheme();
            loadingScreen();
        }
    
    /* Theme Color Button 
    ======================================================================================*/
        if (body.querySelector('#theme-btn')) {
            const btnTheme = body.querySelector('#theme-btn');
            
            btnTheme.addEventListener('click', () => {
                setTheme();
            });
        }    

    /* Scroll Up Button:
    ======================================================================================*/
        if (body.querySelector('#scroll-up-btn')) {
            const scrollUpBtn = body.querySelector('#scroll-up-btn');
            
            scrollUpBtn.addEventListener('click', () => {
                scroll_up();
            });
        }

    /* Per Page:
    ======================================================================================*/
        const mainContent = body.querySelector('.main-content');

        /* Start Page:
        ==================================================================================*/
            if(body.querySelector('#start-page-header-menu-hamburguer')) {
                /* Hamburguer Menu Functionalities:
                ==========================================================================*/
                    const startMenu = body.querySelector('#start-page-header-menu-hamburguer');

                    startMenu.addEventListener('click', () => {
                        showMenu(startMenu);
                    })   
            }

        /* Contact Page:
        ==================================================================================*/
            if(body.querySelector("#contact-form")) {
                /* Contact Form - Submit Function:
                ==========================================================================*/
                    const contactForm = body.querySelector("#contact-form");

                    contactForm.addEventListener('submit', (event) => {
                        event.preventDefault();
                        const form = event.currentTarget;
                        formSubmit(form);
                    })
            }