//logica del formulario de contacto del proyecto freelancer
//el objrtivo de este es poder manipular los datos de los que se registren en el formulario

//explicacion a fondo de las siguientes dos lineas de codigo
//======const formdata = new FormData(form);
//======const data = Object.fromEntries(formdata);

// ¿que significa (new)?
//en js, la palabra reservada new sirve para crear una nueva instancia de un objeto a partir de una funcion constructora o una clase


// FormData(form) = [
//     ["Nombre", "Yeison Quintero"]
//     ["Telefono", "3161471474"]
//     ["Correo electrónico", "ricoprogramar@gmail.com"]
//     ["Mensaje", "Hola que tal, requiero informacion"]
// ]

//ahora transfromo esos datos en un objeto js, con esta linea de codigo
//            const data = Object.fromEntries(formdata);
// data ={
//     Nombre: "Yeison Quintero",
//     Telefono: "3161471474",
//     Correo: "ricoprogramar@gmail.com",
//     Mensaje: "Hola que tal, requiero informacion"
// }
//por ultimo convierto ese objeto a json
// {
//     Nombre: "Yeison Quintero",
//     Telefono: "3161471474",
//     Correo: "ricoprogramar@gmail.com",
//     Mensaje: "Hola que tal, requiero informacion",

// }

// const { FormData } = require("undici-types")
//verificar que el dom este cargado
document.addEventListener('DOMContentLoaded', () =>{ //espera que el dom este 100% cargado antes de ejecutar el script
    //esto selecciona el formulario con la clase contact-form__form
    const form = document.querySelector(".contact-form__form");
    
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
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {"Content-Type": "aplication/json"},
                    //convierte el objeto de datos del formulario a formato json
                    body: JSON.stringify(data),
                });
                //verifica si la respuesta es exitosa (codigo 200-299 )
                if (response.ok){
                    alert("Mensaje enviado con exito");
                    form.reset();
                } else{
                    alert("Hubo un problema al enviar el mensaje")//notifica de un error en el servidor
                }
            

            } catch (error){
                console.error(error);
                alert("Error de conexion")
            }
        });
    };

});