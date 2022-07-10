/* Imports:
==========================================================================================*/
    /* Main Script:
    ======================================================================================*/
        //import { contactForm } from "../main.js"

/* Processing:
==========================================================================================*/
    const contatoContainer = document.querySelector('.contato-container');
    const thankYouForSubmit = document.querySelector('.thankYouForSubmit');
    const thankYouForSubmitButton = document.querySelector('.thankYouForSubmit-btn');
    const connect = 'https://formsubmit.co/ajax/90113fd462a3b1fbb0e402ed29921096';
    
    export function formSubmit(form) {
        const formData =  new FormData(form);
        const jsonString = JSON.stringify(Object.fromEntries(formData));

        fetch(connect, {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: jsonString
        })

        .then(() => {
            form.reset();
            showThankYouMessage();
        })

        .catch(error => console.log(error));
    }

    const showThankYouMessage = () => {
        //contatoContainer.classList.toggle('blur');
        thankYouForSubmit.classList.toggle('hide-content');
    }

    const hideThankYouMessage = () => {
        //ontatoContainer.classList.toggle('blur');
        thankYouForSubmit.classList.toggle('hide-content');
    }

    if(contatoContainer) {
        thankYouForSubmitButton.addEventListener('click', hideThankYouMessage);
    }