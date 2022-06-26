/* Declarations:
==========================================================================================*/
    /* Const Variables:
    ======================================================================================*/
        /* HTML Tags:
        ==================================================================================*/
            //const body = document.body;
            const html = document.querySelector('html');
            const loaderWrapper = document.querySelector('.loader-wrapper');
            const loaderImg = document.getElementById('loader-img');
            const loaderBall1 = document.querySelector(".first-ball");
            const loaderBall2 = document.querySelector(".second-ball");
            const loaderBall3 = document.querySelector(".third-ball");

    /* Let Variables:
    ======================================================================================*/
        let loader_img_url;
        let light;
        let dark;

    /* Event Listeners:
    ======================================================================================*/
        

/* Processing:
==========================================================================================*/
    /* Conditions:
    ======================================================================================*/
        light = true;

        if(light) {
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
                loaderWrapper.style.backgroundColor = "#F7F7F7";

            /* Setting the image to display according to theme:
            ==============================================================================*/
                loader_img_url = "../assets/img/logo/logo-olimpo-aulas-dark-theme.svg";
                loaderImg.src = loader_img_url;
                loaderImg.style.transform = "scaleY(1.05)";

            /* Setting the loader color according to theme:
            ==============================================================================*/
                loaderBall1.style.backgroundColor = "#49EAC3";
                loaderBall2.style.backgroundColor = "#49EAC3";
                loaderBall3.style.backgroundColor = "#49EAC3";

        }

    /* Functions:
    ======================================================================================*/
        function init() {
            setTimeout(() => {
                setTimeout(() => {
                    loaderWrapper.style.opacity = 0;
                    loaderWrapper.style.display = 'none';
                }, 50);

                html.classList.remove('scroll-block');
            }, 3500);
        }

/* Calling Functions to Work:
==========================================================================================*/
    init();