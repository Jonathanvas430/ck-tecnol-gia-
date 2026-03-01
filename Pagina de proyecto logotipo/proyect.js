

//Mostrar mensaje y ocultarlo
const boton = document.getElementById("btnInfo");
const mensaje = document.getElementById("mensaje");


boton.addEventListener("click", () => {
        if (mensaje.style.display === "none") {
            mensaje.style.display = "block";
            boton.textContent = "Ocultar mensaje";
        } else {
            mensaje.style.display = "none";
            boton.textContent = "Mostrar mensaje";
        }
    });

    // Animación al pasar el mouse por las secciones
    const secciones = document.querySelectorAll("section");

    secciones.forEach(seccion => {
        seccion.addEventListener("mouseenter", () => {
            seccion.style.transform = "scale(1.02)";
            seccion.style.transition = "0.3s";
        });

        seccion.addEventListener("mouseleave", () => {
            seccion.style.transform = "scale(1)";
        });
    });

    // Animación al hacer scroll
    window.addEventListener("scroll", () => {
        secciones.forEach(seccion => {
            const posicion = seccion.getBoundingClientRect().top;
            const pantalla = window.innerHeight;

            if (posicion < pantalla - 100) {
                seccion.style.opacity = "1";
                seccion.style.transform = "translateY(0)";
                seccion.style.transition = "0.6s";
            }
        });
    });

    // Estado inicial para animación
    secciones.forEach(seccion => {
        seccion.style.opacity = "0";
        seccion.style.transform = "translateY(40px)";
    });

  