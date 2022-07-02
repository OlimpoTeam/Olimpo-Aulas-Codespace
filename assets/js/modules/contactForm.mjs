/* Imports:
==========================================================================================*/
    /* Main Script:
    ======================================================================================*/
        //import { contactForm } from "../main.js"

/* Processing:
==========================================================================================*/
    export function formSubmit(form) {
        const formData =  new FormData(form);
        const jsonString = JSON.stringify(Object.fromEntries(formData));

        fetch("https://formsubmit.co/ajax/90113fd462a3b1fbb0e402ed29921096", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: jsonString
        })

        .then(() => {
            form.forEach(input => input.value = '');
            
        })

        .catch(error => console.log(error));
    }