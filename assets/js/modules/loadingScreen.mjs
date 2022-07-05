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
                const loaderBall1 = document.querySelector(".first-ball");
                const loaderBall2 = document.querySelector(".second-ball");
                const loaderBall3 = document.querySelector(".third-ball");

            /* Let Variables:
            ==============================================================================*/
                //let theme;
                let loader_img_url;

        /* Scrolling up:
        ==================================================================================*/
            scroll_up();
        
        /* Conditions:
        ==================================================================================*/
            if(themeChosen() == 'light') {
                /* Setting Loader background color:
                ==============================================================================*/
                    loaderWrapper.style.backgroundColor = "#F7F7F7";
                
                /* Setting the image to display according to theme:
                ==============================================================================*/
                    loader_img_url = "../../assets/img/logo/logo-olimpo-aulas-light-theme.svg";
                    loaderImg.src = loader_img_url;
                    loaderImg.style.transform = "scaleX(1.05)";

                /* Setting the loader color according to theme:
                ==============================================================================*/
                    loaderBall1.style.backgroundColor = "#233144";
                    loaderBall2.style.backgroundColor = "#233144";
                    loaderBall3.style.backgroundColor = "#233144";
            } else {
                /* Setting Loader background color:
                ==============================================================================*/
                    loaderWrapper.style.backgroundColor = "#233144";

                /* Setting the image to display according to theme:
                ==============================================================================*/
                    loader_img_url = "../../assets/img/logo/logo-olimpo-aulas-dark-theme.svg";
                    loaderImg.src = loader_img_url;
                    loaderImg.style.transform = "scaleY(1.05)";

                /* Setting the loader color according to theme:
                ==============================================================================*/
                    loaderBall1.style.backgroundColor = "#49EAC3";
                    loaderBall2.style.backgroundColor = "#49EAC3";
                    loaderBall3.style.backgroundColor = "#49EAC3";
            }

        /* Timer:
        ==================================================================================*/
            setTimeout(() => {
                setTimeout(() => {
                    loaderWrapper.style.width = 0;
                    loaderWrapper.style.height = 0;
                    loaderWrapper.style.display = 'none';
                }, 50);

                mainContent.classList.remove('hide-content')
                html.classList.remove('scroll-block');
            }, 3500);
    }