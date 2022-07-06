/* Imports:
==========================================================================================*/
    /* Main Script:
    ======================================================================================*/
        import { html } from '../main.js';
    
    /* Scroll Up:
    ======================================================================================*/
        import { scroll_up } from './scrollUp.mjs';

    /* Theme Color:
    ======================================================================================*/
        import { themeChosen } from './themeColor.mjs';

/* Processing:
==========================================================================================*/
    export function loadingScreen() {
        /* Variables:
        ==================================================================================*/
            /* Const:
            ==============================================================================*/
                const mainContent = document.querySelector('.main-content');
                const loaderWrapper = document.querySelector('.loader-wrapper');
                const loaderImg = document.querySelector('#loader-img');
                const loaderBall = document.querySelectorAll('.ball');

            /* Let Variables:
            ==============================================================================*/
                let loader_img_url;

        /* Scrolling up:
        ==================================================================================*/
            scroll_up();
        
        /* Conditions:
        ==================================================================================*/
            if(themeChosen() == 'light') {                
                /* Setting the image to display according to theme:
                ==============================================================================*/
                    loader_img_url = "../../assets/img/logo/logo-olimpo-aulas-light-theme.svg";
                    loaderImg.src = loader_img_url;
                    loaderImg.style.transform = "scaleX(1.05)";

                /* Setting the loader color according to theme:
                ==============================================================================*/
                    loaderBall.forEach(item => {
                        item.style.backgroundColor = '#233144';
                    })

            } else {
                /* Setting the image to display according to theme:
                ==============================================================================*/
                    loader_img_url = "../../assets/img/logo/logo-olimpo-aulas-dark-theme.svg";
                    loaderImg.src = loader_img_url;
                    loaderImg.style.transform = "scaleY(1.05)";

                /* Setting the loader color according to theme:
                ==============================================================================*/
                    loaderBall.forEach(item => {
                        item.style.backgroundColor = "#49EAC3";
                    })
            }

        /* Timer:
        ==================================================================================*/
            setTimeout(() => {
                setTimeout(() => {
                    loaderWrapper.style.display = 'none';
                    loaderWrapper.style.width = 0;
                    loaderWrapper.style.height = 0;

                }, 50);

                mainContent.classList.remove('hide-content')
                html.classList.remove('scroll-block');
                
            }, 3500);
    }