/* Imports:
==========================================================================================*/
    /* Main Script:
    ======================================================================================*/
        import { body } from '../main.js';
    
/* Functions:
==========================================================================================*/
    export function scroll_up() 
    {
        // For Safari.
            body.scrollTop = 0;
            
        // For Others Browsers.
            document.documentElement.scrollTop = 0;
    }  
