// SELECCIONAR TODOS LOS GRUPOS DEL NAV

const gruposNav = document.querySelectorAll(".nav-grupo");


// ABRIR Y CERRAR MENÚS

gruposNav.forEach(grupo => {

    const boton = grupo.querySelector(".nav-boton");

    boton.addEventListener("click", () => {

        // Comprobar si el menú está abierto
        const estabaAbierto = grupo.classList.contains("abierto");

        // Cerrar todos los menús
        cerrarMenus();

        // Si estaba cerrado, abrirlo
        if (!estabaAbierto) {
            grupo.classList.add("abierto");
            boton.setAttribute("aria-expanded", "true");
        }

    });

});


// FUNCIÓN PARA CERRAR TODOS LOS MENÚS

function cerrarMenus() {

    gruposNav.forEach(grupo => {

        grupo.classList.remove("abierto");

        const boton = grupo.querySelector(".nav-boton");

        boton.setAttribute("aria-expanded", "false");

    });

}


// CERRAR AL HACER CLICK AFUERA

document.addEventListener("click", evento => {

    const clickDentroDelNav = evento.target.closest(".navegacion-principal");

    if (!clickDentroDelNav) {
        cerrarMenus();
    }

});


// CERRAR AL PRESIONAR ESCAPE

document.addEventListener("keydown", evento => {

    if (evento.key === "Escape") {
        cerrarMenus();
    }

});