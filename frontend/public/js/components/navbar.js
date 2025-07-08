document.addEventListener("DOMContentLoaded", function() {
    const navbarElement = document.querySelector(".navbar-container");

    if (navbarElement) {
        fetch("/frontend/public/views/components/navbar.html")
            .then(response => response.text())
            .then(data => {
                navbarElement.innerHTML = data;
                
            //===logica para resaltar el enlace activo en el navbar 
            //obtener la ruta actual
            //si no hay un archivo especifico se asume que es el index 
            const currentPage = window.location.pathname.split("/").pop() || "index.html";
            
            //selecciona todos los enlaces del navbar que usaran la clase personalizada
            const navlinks = navbarElement.querySelectorAll(".navbar__link");

            //recorrer cada enlace del navbar 
            navlinks.forEach(link => {
                
                //verificarsi el href del enlace incluye el nombre de la pagina actual
                if(link.getAttribute("href").includes(currentPage)){
                    //si es la pagina actual se le asigna la clase 'active' para destacarla visualmente
                    link.classList.add ("active");
                }
            });
        })
            .catch(error => console.error("Error cargando el navbar", error));
    }
});
