//ESTE ARCHIVO ES EL DE LA PAGINA DE MATERIALES Y NO LA BASE DE DATOS.+

import { materiales } from "./database/materiales.js";

// Elementos HTML
const listaAgrupaciones = document.getElementById(
    "lista-agrupaciones"
);
const buscador = document.getElementById("buscar-material");
const cantidadMateriales = document.getElementById(
    "cantidad-materiales"
);

// Formato de precios argentinos
const formatoPrecio = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2
});

// Convierte la fecha YYYY-MM-DD a DD/MM/YYYY
function formatearFecha(fecha) {
    if (!fecha) return "Sin actualizar";
    const [anio, mes, dia] = fecha.split("-");
    return `${dia}/${mes}/${anio}`;
}

// Agrupa los materiales según su categoría
function agruparMateriales(lista) {
    const agrupaciones = {};
    lista.forEach(material => {
        const categoria = material.agrupacion || "Sin agrupación";
        if (!agrupaciones[categoria]) {
            agrupaciones[categoria] = [];
        }
        agrupaciones[categoria].push(material);
    });
    return agrupaciones;
}

// Crea una tabla para cada agrupación
function crearTabla(lista) {
    const tabla = document.createElement("table");
    tabla.classList.add("tabla-materiales");
    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");
    [
        "Material",
        "Unidad",
        "Unidad comercial",
        "Equivalencia",
        "Precio",
        "Actualización"
    ].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        filaEncabezado.appendChild(th);
    });
    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);
    const cuerpo = document.createElement("tbody");
    lista.forEach(material => {
        const fila = document.createElement("tr");
        const datos = [
            material.nombre,
            material.unidad,
            material.unidadComercial,
            material.equivalenciaComercial,
            material.precio !== null && material.precio !== undefined
                ? formatoPrecio.format(material.precio)
                : "Pendiente de cargar",
            formatearFecha(material.fechaActualizacionPrecio)
        ];
        datos.forEach((dato, indice) => {
            const celda = document.createElement("td");
            celda.textContent = dato ?? "—";
            if (indice === 4 && (material.precio === null || material.precio === undefined)) {
                celda.classList.add("precio-pendiente");
            }
            fila.appendChild(celda);
        });
        cuerpo.appendChild(fila);
    });
    tabla.appendChild(cuerpo);
    return tabla;
}

// Muestra las agrupaciones y sus materiales
function renderizarMateriales(lista) {
    listaAgrupaciones.replaceChildren();
    cantidadMateriales.textContent =
        `${lista.length} materiales`;
    if (lista.length === 0) {
        listaAgrupaciones.textContent =
            "No se encontraron materiales.";
        return;
    }
    const agrupaciones = agruparMateriales(lista);
    Object.entries(agrupaciones).forEach(([nombre, elementos]) => {
        const seccion = document.createElement("details");
        seccion.classList.add("agrupacion-materiales");
        seccion.open = true;
        const titulo = document.createElement("summary");
        const nombreCategoria = document.createElement("span");
        nombreCategoria.textContent = nombre;
        const cantidad = document.createElement("span");
        cantidad.classList.add("cantidad-agrupacion");
        cantidad.textContent = `${elementos.length} materiales`;
        titulo.append(nombreCategoria, cantidad);
        seccion.appendChild(titulo);
        seccion.appendChild(crearTabla(elementos));
        listaAgrupaciones.appendChild(seccion);
    });
}

// Buscador de materiales
function buscarMateriales() {
    const busqueda = buscador.value
        .trim()
        .toLowerCase();
    const resultados = materiales.filter(material => {
        const nombre = material.nombre.toLowerCase();
        const agrupacion = (material.agrupacion || "").toLowerCase();
        return nombre.includes(busqueda) ||
                agrupacion.includes(busqueda);
    });
    renderizarMateriales(resultados);
}
// Eventos
buscador.addEventListener("input", buscarMateriales);
// Carga inicial
renderizarMateriales(materiales);
