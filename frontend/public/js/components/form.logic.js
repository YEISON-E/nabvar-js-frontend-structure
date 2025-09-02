//verificar que el dom este cargado
document.addEventListener('DOMContentLoaded', () =>{ //espera que el dom este 100% cargado antes de ejecutar el script
    //esto selecciona el formulario con la clase contact-form__form
    const form = document.querySelector(".contact-form__form")
    
    //verifica que el formulario exista en el DOM
    if (form){
        //escucha el evento submit
        form.addEventListener("submit", async (e) => {
            //prevenir el comportamiento por defecto del navegador de recarga de la pagina
            e.preventDefault();

            //convierte los datos del formulario en un objeto js
            const formdata = new FormData(form);
            const data = Object.fromEntries(formdata);
            try{
                const response
            }
        })
    }

})