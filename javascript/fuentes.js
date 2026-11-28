import { fuentes } from "./database/fuentes.js";
// ELEMENTOS HTML
const contenedor = document.getElementById("lista-fuentes");
const buscador = document.getElementById("buscador-fuentes");
const filtroTipo = document.getElementById("filtro-tipo");
// RENDERIZAR CATÁLOGO
function renderizarFuentes(lista) {
    contenedor.replaceChildren();
    if (lista.length === 0) {
        contenedor.innerHTML = `
            <p class="mensaje-vacio">
                No se encontraron fuentes de cálculo.
            </p>
        `;
        return;
    }
    lista.forEach(fuente => {
        const tipo = fuente.tipoTabla === "fuente"
            ? "De fuente"
            : "Personal";
        const tarjeta = document.createElement("a");
        tarjeta.classList.add("tarjeta-fuente");
        tarjeta.id = fuente.id;
        tarjeta.innerHTML = `
            <div class="fuente-imagen">
                <img
                    src="${fuente.imagen}"
                    alt="${fuente.nombre}"
                >
            </div>
            <div class="fuente-contenido">
                <div class="fuente-superior">
                    <span class="fuente-id">${fuente.id}</span>
                    <span class="fuente-tipo tipo-${fuente.tipoTabla}">
                        ${tipo}
                    </span>
                </div>
                <h3>${fuente.nombre}</h3>
                <p class="fuente-resumen">
                    ${fuente.descripcion}
                </p>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}
// BUSCADOR Y FILTROS
function filtrarFuentes() {
    const busqueda = buscador.value.trim().toLowerCase();
    const tipoSeleccionado = filtroTipo.value;
    const resultados = fuentes.filter(fuente => {
        const coincideBusqueda =
            fuente.id.toLowerCase().includes(busqueda) ||
            fuente.nombre.toLowerCase().includes(busqueda);
        const coincideTipo =
            tipoSeleccionado === "todos" ||
            fuente.tipoTabla === tipoSeleccionado;
        return coincideBusqueda && coincideTipo;
    });
    renderizarFuentes(resultados);
}
// EVENTOS
buscador.addEventListener("input", filtrarFuentes);
filtroTipo.addEventListener("change", filtrarFuentes);
// INICIALIZAR
renderizarFuentes(fuentes);