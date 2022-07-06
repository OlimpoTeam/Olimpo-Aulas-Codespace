/* Imports:
==========================================================================================*/
    /* Main Script:
    ======================================================================================*/
        import { body, html } from '../main.js';

/* Variables:
==========================================================================================*/


/* Processing:
==========================================================================================*/
    export function themeChosen() {
        let currentTheme;

        if (localStorage.getItem('theme') == 'light' || localStorage.getItem('theme') == 'dark') {
            currentTheme = localStorage.getItem('theme');

        } else {
            localStorage.setItem('theme', 'light');
            currentTheme = localStorage.getItem('theme');
        }

        return currentTheme;
    }

    const lightColors = {
        bodyColor: getComputedStyle(document.documentElement, null).getPropertyValue('--body-color'),
        divColor: getComputedStyle(document.documentElement, null).getPropertyValue('--div-color'),
        divColorSpecialOne: getComputedStyle(document.documentElement, null).getPropertyValue('--div-color-special-one'),
        divColorSpecialTwo: getComputedStyle(document.documentElement, null).getPropertyValue('--div-color-special-two'),
        textColor: getComputedStyle(document.documentElement, null).getPropertyValue('--text-color'),
        alternativeTextColor: getComputedStyle(document.documentElement, null).getPropertyValue('--alternative-text-color'),
        buttonColorOne: getComputedStyle(document.documentElement, null).getPropertyValue('--button-color-one'),
        buttonColorTwo: getComputedStyle(document.documentElement, null).getPropertyValue('--button-color-two')
    }
    
    const darkColors = {
        bodyColor: '#1B2737',
        divColor: '#233144',
        divColorSpecialOne: '#436E63',
        divColorSpecialTwo: '#C8C8C8',
        textColor: '#FFFFFF',
        alternativeTextColor: '#000000',
        buttonColorOne: '#49EAC3',
        buttonColorTwo: '#9E4151'
    }

    // #165254

    const camelToHyphens = (variable) => {
        const hyphens = variable.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const result = '--' + hyphens;
        return result;
    }

    function changeColors(colorMode) {
        Object.keys(colorMode).map(
            key => {
                html.style.setProperty(camelToHyphens(key), colorMode[key]);
            }
        )
    }

    export function setTheme() {
        const answer = themeChosen();

        if (answer == 'light') {
            // Muda pra dark:
            changeColors(darkColors);
            localStorage.setItem('theme', 'dark'); // Salva no local storage a ultima alteração.

        } else {
            //Muda para light:
            changeColors(lightColors);
            localStorage.setItem('theme', 'light'); // Salva no local storage a ultima alteração.
            
        }
    }

    export const changeTheme = () => {
        const answer = themeChosen();

        if (answer == 'light') {
            changeColors(lightColors);

        } else {
            changeColors(darkColors);
        }
    }