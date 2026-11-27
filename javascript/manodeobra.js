import { manoObra } from "./database/manodeobra.js";
// Elementos HTML
const listaAgrupaciones = document.getElementById(
    "lista-agrupaciones"
);
const buscador = document.getElementById("buscar-mano-obra");
const cantidadManoObra = document.getElementById(
    "cantidad-mano-obra"
);
// Agrupa la mano de obra según su categoría
function agruparManoObra(lista) {
    const agrupaciones = {};
    lista.forEach(recurso => {
        const categoria = recurso.agrupacion || "Sin agrupación";
        if (!agrupaciones[categoria]) {
            agrupaciones[categoria] = [];
        }
        agrupaciones[categoria].push(recurso);
    });
    return agrupaciones;
}
// Crea una tabla para cada agrupación
function crearTabla(lista) {
    const tabla = document.createElement("table");
    tabla.classList.add("tabla", "tabla-mano-obra");
    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");
    [
        "Código",
        "Categoría laboral",
        "Unidad",
        "Salario ($/h)"
    ].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        filaEncabezado.appendChild(th);
    });
    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);
    const cuerpo = document.createElement("tbody");
    lista.forEach(recurso => {
        const fila = document.createElement("tr");
        const datos = [
            recurso.id,
            recurso.nombre,
            recurso.unidad,
            recurso.salario
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
// Muestra las agrupaciones y sus recursos
function renderizarManoObra(lista) {
    listaAgrupaciones.replaceChildren();
    cantidadManoObra.textContent =
        `${lista.length} recursos`;
    if (lista.length === 0) {
        listaAgrupaciones.textContent =
            "No se encontraron recursos de mano de obra.";
        return;
    }
    const agrupaciones = agruparManoObra(lista);
    Object.entries(agrupaciones).forEach(([nombre, elementos]) => {
        const seccion = document.createElement("details");
        seccion.classList.add("agrupacion", "agrupacion-mano-obra");
        seccion.open = true;
        const titulo = document.createElement("summary");
        const nombreCategoria = document.createElement("span");
        nombreCategoria.textContent = nombre;
        const cantidad = document.createElement("span");
        cantidad.classList.add("cantidad-agrupacion");
        cantidad.textContent = `${elementos.length} recursos`;
        titulo.append(nombreCategoria, cantidad);
        seccion.appendChild(titulo);
        seccion.appendChild(crearTabla(elementos));
        listaAgrupaciones.appendChild(seccion);
    });
}
// Buscador de mano de obra
function buscarManoObra() {
    const busqueda = buscador.value
        .trim()
        .toLowerCase();
    const resultados = manoObra.filter(recurso => {
        const id = recurso.id.toLowerCase();
        const nombre = recurso.nombre.toLowerCase();
        const agrupacion = (recurso.agrupacion || "").toLowerCase();
        return id.includes(busqueda) ||
                nombre.includes(busqueda) ||
                agrupacion.includes(busqueda);
    });
    renderizarManoObra(resultados);
}
// Eventos
buscador.addEventListener("input", buscarManoObra);
// Carga inicial
renderizarManoObra(manoObra);
