/* =========================================
    LISTADO GENERAL DE SUBÍTEMS
========================================= */
// BASES DE DATOS
import { subitemsIniciales } from "./database/subitems.js";
import { materiales } from "./database/materiales.js";
import { manoObra } from "./database/manodeobra.js";
import { equipos } from "./database/equipos.js";
import { calcularAPU } from "./apu.js";
import { rubros } from "./database/items.js";
// =======================================
// 1. ELEMENTOS HTML
// =========================================
const tablaSubitems = document.getElementById(
    "lista-agrupaciones"
);
const buscador = document.getElementById(
    "buscar-subitem"
);
const cantidadSubitems = document.getElementById(
    "cantidad-subitems"
);
// =========================================
// 2. FORMATO DE PRECIOS
// =========================================
const formatoPrecio = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2
});
// =========================================
// 3. CALCULAR COSTO DE CADA SUBÍTEM
// =========================================
function obtenerCostoSubitem(subitem) {
    const resultado = calcularAPU(
        subitem,
        materiales,
        manoObra,
        equipos
    );
    return resultado.precioUnitario;
}
// =========================================
// 4. CREAR FILAS DE LA TABLA
// =========================================

function obtenerItem(itemId) {
    for (const rubro of rubros) {
        const item = rubro.id;
        if (item) {
            return item;
        }
    }
    return null;
}

function obtenerNombreItem(itemId) {
    for (const rubro of rubros) {
        const itemNombre = rubro.nombre;
        if (itemNombre) {
            return itemNombre;
        }
    }
    return "—";
}
//Agrupacion de subitems
function agruparSubitems(lista) {
    const agrupaciones = {};
    lista.forEach(subitem => {
        // BUSCAR EL RUBRO AL QUE PERTENECE
        const rubro = rubros.find(rubro =>
            rubro.items.some(item =>
                item.id === subitem.itemId
            )
        );
        const rubroId = rubro?.id || "Sin rubro";
        if (!agrupaciones[rubroId]) {
            agrupaciones[rubroId] = {
                rubro: rubro,
                elementos: []
            };
        }
        agrupaciones[rubroId].elementos.push(subitem);
    });
    return agrupaciones;
}




function crearFila(subitem) {
    const fila = document.createElement("tr");
    // ID
    const celdaID = document.createElement("td");
    celdaID.textContent = subitem.id;
    //Codigo
    const celdaCodigo = document.createElement("td");
    celdaCodigo.textContent = subitem.codigo;
    // NOMBRE Y ENLACE A LA FICHA
    const celdaNombre = document.createElement("td");
    const enlace = document.createElement("a");
    enlace.href =
    `subitem.html?id=${encodeURIComponent(subitem.id)}`;
    enlace.textContent = subitem.descripcion;
    enlace.classList.add("enlace-tabla-subitem");
    celdaNombre.appendChild(enlace);
    // UNIDAD
    const celdaUnidad = document.createElement("td");
    celdaUnidad.textContent = subitem.unidad ?? "—";
    // COSTO UNITARIO
    const celdaCosto = document.createElement("td");
    const costo = obtenerCostoSubitem(subitem);
    celdaCosto.textContent = Number.isFinite(costo)
        ? formatoPrecio.format(costo)
        : "No disponible";
    celdaCosto.classList.add("celda-costo");
    // ESTADO
    const celdaEstado = document.createElement("td");
    const estado = document.createElement("span");
    estado.textContent = subitem.estado.toUpperCase();
    estado.classList.add(
        "estado",
        `estado-${subitem.estado}`
    );
    celdaEstado.appendChild(estado);
    // AGREGAR CELDAS
    fila.append(
        celdaID,
        celdaCodigo,
        celdaNombre,
        celdaUnidad,
        celdaCosto,
        celdaEstado
    );
    return fila;
}
// Crear tabla
function crearTabla(lista) {
    const tabla = document.createElement("table");
    tabla.classList.add("tabla", "tabla-subitems");
    // ENCABEZADO
    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");
    [
        "ID",
        "Codigo",
        "Nombre del subítem",
        "Unidad",
        "Costo unitario total",
        "Estado"
    ].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        filaEncabezado.appendChild(th);
    });
    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);
    // CUERPO
    const cuerpo = document.createElement("tbody");
    lista.forEach(subitem => {
        cuerpo.appendChild(crearFila(subitem));
    });
    tabla.appendChild(cuerpo);
    return tabla;
}
// =========================================
// 5. MOSTRAR SUBÍTEMS
// =========================================
function renderizarSubitems(lista) {
    tablaSubitems.replaceChildren();
    cantidadSubitems.textContent =
        `${lista.length} subítems`;
    // SI NO HAY RESULTADOS
    if (lista.length === 0) {
        tablaSubitems.textContent =
            "No se encontraron subítems.";
        return;
    }
    // AGRUPAR POR RUBRO
    const agrupaciones = agruparSubitems(lista);
    // GENERAR GRUPOS
    Object.values(agrupaciones).forEach(grupo => {
        const elementos = grupo.elementos;
        const rubro = grupo.rubro;
        // ORDENAR SUBÍTEMS POR CÓDIGO
        elementos.sort((a, b) =>
            a.codigo.localeCompare(
                b.codigo,
                undefined,
                { numeric: true }
            )
        );
        // NOMBRE DEL RUBRO
        const nombre = rubro
            ? `${rubro.id[4]}${rubro.id[5]} — ${rubro.nombre}`
            : "Sin rubro asociado";
        // CREAR GRUPO DESPLEGABLE
        const seccion = document.createElement("details");
        seccion.classList.add(
            "agrupacion",
            "agrupacion-subitems"
        );
        seccion.open = true;
        // TÍTULO
        const titulo = document.createElement("summary");
        const nombreRubro = document.createElement("span");
        nombreRubro.textContent = nombre;
        const cantidad = document.createElement("span");
        cantidad.classList.add("cantidad-agrupacion");
        cantidad.textContent =
            `${elementos.length} subítems`;
        titulo.append(nombreRubro, cantidad);
        // AGREGAR TABLA
        seccion.appendChild(titulo);
        seccion.appendChild(crearTabla(elementos));
        tablaSubitems.appendChild(seccion);
    });
}


// =========================================
// 6. BUSCADOR
// =========================================

function buscarSubitems() {
    const busqueda = buscador.value
        .trim()
        .toLowerCase();
    const resultados = subitemsIniciales.filter(subitem => {
        // BUSCAR RUBRO AL QUE PERTENECE
        const rubro = rubros.find(rubro =>
            rubro.items.some(item =>
                item.id === subitem.itemId
            )
        );
        // DATOS DEL SUBITEM
        const id = subitem.id.toLowerCase();
        const codigo = subitem.codigo.toLowerCase();
        const nombre = subitem.descripcion.toLowerCase();
        // DATOS DEL RUBRO
        const nombreRubro = rubro?.nombre.toLowerCase() ?? "";
        const codigoRubro = rubro?.id.toLowerCase() ?? "";
        // COMPARAR
        return id.includes(busqueda) ||
            codigo.includes(busqueda) ||
            nombre.includes(busqueda) ||
            nombreRubro.includes(busqueda) ||
            codigoRubro.includes(busqueda);
    });
    renderizarSubitems(resultados);
}

// =========================================
// 7. EVENTOS
// =========================================
buscador.addEventListener(
    "input",
    buscarSubitems
);
// =========================================
// 8. CARGA INICIAL
// =========================================
renderizarSubitems(subitemsIniciales);
