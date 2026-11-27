import { equipos } from "./database/equipos.js";
// Elementos HTML
const listaAgrupaciones = document.getElementById(
    "lista-agrupaciones"
);
const buscador = document.getElementById("buscar-equipo");
const cantidadEquipos = document.getElementById(
    "cantidad-equipos"
);
// Agrupa los equipos según su categoría
function agruparEquipos(lista) {
    const agrupaciones = {};
    lista.forEach(equipo => {
        const categoria = equipo.agrupacion || "Sin agrupación";
        if (!agrupaciones[categoria]) {
            agrupaciones[categoria] = [];
        }
        agrupaciones[categoria].push(equipo);
    });
    return agrupaciones;
}
// Crea una tabla para cada agrupación
function crearTabla(lista) {
    const tabla = document.createElement("table");
    tabla.classList.add("tabla", "tabla-equipos");
    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");
    [
        "Código",
        "Equipo",
        "Unidad"
    ].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        filaEncabezado.appendChild(th);
    });
    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);
    const cuerpo = document.createElement("tbody");
    lista.forEach(equipo => {
        const fila = document.createElement("tr");
        const datos = [
            equipo.id,
            equipo.nombre,
            equipo.unidad
        ];
        datos.forEach(dato => {
            const celda = document.createElement("td");
            celda.textContent = dato ?? "—";
            fila.appendChild(celda);
        });
        cuerpo.appendChild(fila);
    });
    tabla.appendChild(cuerpo);
    return tabla;
}
// Muestra las agrupaciones y sus equipos
function renderizarEquipos(lista) {
    listaAgrupaciones.replaceChildren();
    cantidadEquipos.textContent =
        `${lista.length} equipos`;
    if (lista.length === 0) {
        listaAgrupaciones.textContent =
            "No se encontraron equipos.";
        return;
    }
    const agrupaciones = agruparEquipos(lista);
    Object.entries(agrupaciones).forEach(([nombre, elementos]) => {
        const seccion = document.createElement("details");
        seccion.classList.add("agrupacion", "agrupacion-equipos");
        seccion.open = true;
        const titulo = document.createElement("summary");
        const nombreCategoria = document.createElement("span");
        nombreCategoria.textContent = nombre;
        const cantidad = document.createElement("span");
        cantidad.classList.add("cantidad-agrupacion");
        cantidad.textContent = `${elementos.length} equipos`;
        titulo.append(nombreCategoria, cantidad);
        seccion.appendChild(titulo);
        seccion.appendChild(crearTabla(elementos));
        listaAgrupaciones.appendChild(seccion);
    });
}
// Buscador de equipos
function buscarEquipos() {
    const busqueda = buscador.value
        .trim()
        .toLowerCase();
    const resultados = equipos.filter(equipo => {
        const id = equipo.id.toLowerCase();
        const nombre = equipo.nombre.toLowerCase();
        const agrupacion = (equipo.agrupacion || "").toLowerCase();
        return id.includes(busqueda) ||
                nombre.includes(busqueda) ||
                agrupacion.includes(busqueda);
    });
    renderizarEquipos(resultados);
}
// Eventos
buscador.addEventListener("input", buscarEquipos);
// Carga inicial
renderizarEquipos(equipos);
