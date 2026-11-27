/* =================================
    COMPUTO Y PRESUPUESTO
    Archivo principal de JavaScript
================================= */

// En esta sección incorporaremos las
// funciones generales de la página.

/* ================================
    COMPUTO Y PRESUPUESTO
    MENU DESPLEGABLE DE RUBROS
================================= */

/* =================================
    1. BASE DE DATOS DE PRUEBA
================================= */
import { rubros } from "./database/items.js";
import { subitemsIniciales } from "./database/subitems.js";

/* =================================
    2. GENERAR LISTA DE ITEMS
    ================================= */
function obtenerSubitems() {
    return subitemsIniciales;
}


function generarItems(rubro, contenedor) {
    // Buscamos el rubro correspondiente
    const rubroActual = typeof rubro === "object"
        ? rubro
        : rubros.find(elemento =>
            elemento.id === rubro ||
            elemento.nombre.toLowerCase() === String(rubro).toLowerCase()
        );
    // Verificamos que exista el rubro
    if (!rubroActual) {
        console.error("No se encontró el rubro:", rubro);
        return;
    }
    // Obtenemos todos los subítems
    const subitems = obtenerSubitems();
    // Recorremos los ítems del rubro
    rubroActual.items.forEach(item => {
        // Creamos el contenedor del ítem
        const grupoElemento = document.createElement("div");
        grupoElemento.classList.add("grupo-item");
        // Creamos el título
        const titulo = document.createElement("h4");
        titulo.textContent = `${item.codigo} ${item.nombre}`;
        if (item.codigo.length < 3){
            titulo.classList.add("titulo-item-borrado");
        }
        // Creamos la lista de subítems
        const lista = document.createElement("ul");
        lista.classList.add("lista-subitems");
        // Buscamos los subítems pertenecientes a este ítem
        const subitemsDelItem = subitems
            .filter(subitem => subitem.itemId === item.id)
            .sort((a, b) =>
                a.codigo.localeCompare(b.codigo, undefined, {
                    numeric: true
                })
            );
        // Creamos un enlace para cada subítem
        subitemsDelItem.forEach(subitem => {
            const elemento = document.createElement("li");
            const enlace = document.createElement("a");
            enlace.href =
                `pages/subitem.html?id=${encodeURIComponent(subitem.id)}`;
            enlace.textContent =
                `${subitem.codigo} - ${subitem.descripcion}`;
            enlace.classList.add("enlace-subitem");
            elemento.appendChild(enlace);
            lista.appendChild(elemento);
        });
        // Si el ítem todavía no tiene subítems
        if (subitemsDelItem.length === 0) {
            const elemento = document.createElement("li");
            elemento.textContent = "No hay subítems cargados.";
            lista.appendChild(elemento);
        }
        // Agregamos todo al contenedor
        grupoElemento.appendChild(titulo);
        grupoElemento.appendChild(lista);
        contenedor.appendChild(grupoElemento);
    });
}


/* =================================
    3. FUNCIONAMIENTO DE LOS BOTONES
================================= */

const botonesRubros = document.querySelectorAll(
    ".rubro-toggle"
);
botonesRubros.forEach(boton => {
    boton.addEventListener("click", () => {
        // Identificamos el rubro seleccionado
        const rubroSeleccionado = boton.dataset.rubro;
        // Buscamos el contenedor correspondiente
        const contenedor = boton.nextElementSibling;
        // Comprobamos si ya estaba abierto
        const estabaAbierto = contenedor.classList.contains(
            "abierto"
        );
        // Cerramos los demás desplegables
        document.querySelectorAll(".subitems-contenedor")
            .forEach(elemento => {
                elemento.classList.remove("abierto");
                elemento.innerHTML = "";
            });
        document.querySelectorAll(".rubro-toggle")
            .forEach(elemento => {
                elemento.classList.remove("activo");
            });
        // Si estaba cerrado, lo abrimos
        if (!estabaAbierto) {
            generarItems(
                rubroSeleccionado,
                contenedor
            );
            contenedor.classList.add("abierto");
            boton.classList.add("activo");
        }
    });
});

// ======================================
// GENERAR ENLACES A LAS FICHAS
// ======================================


// Buscar los subítems que pertenecen a un ítem
function obtenerSubitemsPorItem(itemId) {
    return obtenerSubitems()
        .filter(subitem => subitem.itemId === itemId)
        .sort((a, b) =>
            a.codigo.localeCompare(b.codigo, undefined, {
                numeric: true
            })
        );
}
// Crear el enlace a la ficha técnica
function crearEnlaceFicha(subitem) {
    const enlace = document.createElement("a");
    enlace.href = `pages/subitem.html?id=${encodeURIComponent(subitem.id)}`;
    enlace.textContent = `${subitem.codigo} - ${subitem.descripcion}`;
    enlace.className = "enlace-subitem";
    return enlace;
}

function mostrarSubitems(item, contenedor) {
    const lista = document.createElement("div");
    const subitems = obtenerSubitemsPorItem(item.id);
    subitems.forEach(subitem => {
        const enlace = document.createElement("a");
        enlace.href = `pages/subitem.html?id=${subitem.id}`;
        enlace.textContent =
            `${subitem.codigo} - ${subitem.descripcion}`;
        enlace.className = "enlace-subitem";
        lista.appendChild(enlace);
    });
    contenedor.appendChild(lista);
}


// ===================================
// MENÚ DESPLEGABLE DE BIBLIOTECA. PAGINA PRINCIAPAL
// ===================================

const bibliotecaBtn = document.querySelector("#biblioteca-btn");
const bibliotecaMenu = document.querySelector("#biblioteca-menu");
const bibliotecaDropdown = document.querySelector(".nav-dropdown");
if (bibliotecaBtn && bibliotecaMenu && bibliotecaDropdown) {
    bibliotecaBtn.addEventListener("click", () => {
        const estaAbierto =
            bibliotecaDropdown.classList.toggle("abierto");
        bibliotecaBtn.setAttribute(
            "aria-expanded",
            estaAbierto
        );
    });
    // Cerrar al hacer clic fuera del menú
    document.addEventListener("click", (evento) => {
        if (!bibliotecaDropdown.contains(evento.target)) {
            bibliotecaDropdown.classList.remove("abierto");
            bibliotecaBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
    // Cerrar al seleccionar una opción
    bibliotecaMenu.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            bibliotecaDropdown.classList.remove("abierto");
            bibliotecaBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });

// Cerrar al presionar Escape
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            bibliotecaDropdown.classList.remove("abierto");
            bibliotecaBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });

}
