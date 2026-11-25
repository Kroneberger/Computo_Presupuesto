
import { materiales } from "./database/materiales.js";
import { manoObra } from "./database/manodeobra.js";
import { equipos } from "./database/equipos.js";
import { subitemsIniciales } from "./database/subitems.js";

// ======================================
// 1. CONFIGURACIÓN Y BASE DE DATOS
// ======================================

const CLAVE = "bibliotecaSubitems";
let subitems = JSON.parse(
    localStorage.getItem(CLAVE)
) || structuredClone(subitemsIniciales);
const parametros = new URLSearchParams(window.location.search);
const idURL = parametros.get("id");
let subitemActual = subitems.find(s => s.id === idURL);
let modoEdicion = !subitemActual || subitemActual.estado === "borrador";
if (!subitemActual) {
    subitemActual = {
    id: "",
    descripcion: "",
    unidad: "",
    item: "",
    materiales: [],
    manoObra: [],
    equipos: [],
    descripcionAmpliada: "",
    observaciones: "",
    estado: "borrador"
    };
}
// ======================================
// 2. ELEMENTOS HTML
// ======================================
const $ = id => document.getElementById(id);

// ======================================
// IDENTIFICACIÓN DEL SUBÍTEM
// ======================================

const campos = {
    id: document.getElementById("id"),
    descripcion: document.getElementById("descripcion"),
    unidad: document.getElementById("unidad"),
    item: document.getElementById("item"),
    descripcionAmpliada: document.getElementById("descripcion-ampliada"),
    observaciones: document.getElementById("observaciones")
};

// ======================================
// 3. BUSCADOR Y SELECTORES
// ======================================
function configurarSelector(
    base,
    buscador,
    selector
) {
    function actualizar() {
    const texto = $(buscador).value.toLowerCase();
    const filtrados = base.filter(insumo =>
        insumo.nombre.toLowerCase().includes(texto)
    );
    $(selector).innerHTML =
        '<option value="">Seleccionar...</option>';
    filtrados.forEach(insumo => {
        const opcion = document.createElement("option");
        opcion.value = insumo.id;
        opcion.textContent =
        `${insumo.nombre} (${insumo.unidad})`;
        $(selector).appendChild(opcion);
    });
    }
    $(buscador).addEventListener("input", actualizar);
    actualizar();
}
configurarSelector(
    materiales,
    "buscar-material",
    "select-material"
);
configurarSelector(
    manoObra,
    "buscar-mano-obra",
    "select-mano-obra"
);
configurarSelector(
    equipos,
    "buscar-equipo",
    "select-equipo"
);
// ======================================
// 4. AGREGAR INSUMOS
// ======================================
function agregarInsumo(tipo, selector, cantidad) {
    if (!modoEdicion) return;
    const insumoId = $(selector).value;
    const valor = Number($(cantidad).value);
    if (!insumoId || !Number.isFinite(valor) || valor <= 0) {
    alert("Seleccioná un insumo e ingresá una cantidad válida.");
    return;
    }
    const propiedad = {
    material: "materiales",
    manoObra: "manoObra",
    equipo: "equipos"
    }[tipo];
    const lista = subitemActual[propiedad];
    if (lista.some(insumo => insumo.insumoId === insumoId)) {
    alert("Este insumo ya está agregado.");
    return;
    }
    const nuevoInsumo = {
    insumoId,
    [tipo === "manoObra" ? "rendimiento" : "cantidad"]: valor
    };
    lista.push(nuevoInsumo);
    $(cantidad).value = "";
    $(selector).value = "";
    renderizarTablas();
}
$("agregar-material").addEventListener("click", () =>
    agregarInsumo(
    "material",
    "select-material",
    "cantidad-material"
    )
);
$("agregar-mano-obra").addEventListener("click", () =>
    agregarInsumo(
    "manoObra",
    "select-mano-obra",
    "cantidad-mano-obra"
    )
);
$("agregar-equipo").addEventListener("click", () =>
    agregarInsumo(
    "equipo",
    "select-equipo",
    "cantidad-equipo"
    )
);
// ======================================
// 5. MOSTRAR TABLAS
// ======================================
function renderizarLista(
    lista,
    base,
    contenedor,
    tipo
) {
    const destino = $(contenedor);
    destino.replaceChildren();
    if (lista.length === 0) {
    destino.textContent = "No hay insumos agregados.";
    return;
    }
    const tabla = document.createElement("table");
    const encabezado = document.createElement("tr");
    ["Insumo", "Consumo", "Acciones"].forEach(texto => {
    const th = document.createElement("th");
    th.textContent = texto;
    encabezado.appendChild(th);
    });
    tabla.appendChild(encabezado);
    lista.forEach((registro, indice) => {
    const insumo = base.find(
        elemento => elemento.id === registro.insumoId
    );
    if (!insumo) return;
    const fila = document.createElement("tr");
    const nombre = document.createElement("td");
    nombre.textContent = insumo.nombre;
    const consumo = document.createElement("td");
    const cantidad = tipo === "manoObra"
        ? registro.rendimiento
        : registro.cantidad;
    consumo.textContent =
        `${cantidad} ${insumo.unidad}`;
    const acciones = document.createElement("td");
    if (modoEdicion) {
        const boton = document.createElement("button");
        boton.textContent = "Quitar";
        boton.addEventListener("click", () => {
        lista.splice(indice, 1);
        renderizarTablas();
        });
        acciones.appendChild(boton);
    }
    fila.append(nombre, consumo, acciones);
    tabla.appendChild(fila);
    });
    destino.appendChild(tabla);
}
function renderizarTablas() {
    renderizarLista(
    subitemActual.materiales,
    materiales,
    "tabla-materiales",
    "material"
    );
    renderizarLista(
    subitemActual.manoObra,
    manoObra,
    "tabla-mano-obra",
    "manoObra"
    );
    renderizarLista(
    subitemActual.equipos,
    equipos,
    "tabla-equipos",
    "equipo"
    );
}
// ======================================
// 6. CARGAR INFORMACIÓN DE LA FICHA
// ======================================

function cargarFicha() {

  // Información general: solo lectura
    campos.id.textContent = subitemActual.id;
    campos.descripcion.textContent = subitemActual.descripcion;
    campos.unidad.textContent = subitemActual.unidad;
    campos.item.textContent = subitemActual.item;
  // Información editable
    campos.descripcionAmpliada.value =
    subitemActual.descripcionAmpliada || "";
    campos.observaciones.value =
    subitemActual.observaciones || "";
    $("estado-ficha").textContent =
    subitemActual.estado === "publicado"
        ? "Publicado"
        : "Borrador";
    $("estado-ficha").className =
    `badge ${subitemActual.estado}`;
    renderizarTablas();
    actualizarModo();
}

// ======================================
// 7. BLOQUEAR Y DESBLOQUEAR
// ======================================
function actualizarModo() {
    document.querySelectorAll("main input, main textarea")
    .forEach(campo => campo.disabled = !modoEdicion);
    document.querySelectorAll("main select")
    .forEach(campo => campo.disabled = !modoEdicion);
    document.querySelectorAll(".selector-grid button")
    .forEach(boton => boton.disabled = !modoEdicion);
    $("guardar-borrador").hidden = !modoEdicion;
    $("publicar-ficha").hidden = !modoEdicion;
    $("desbloquear-ficha").hidden = modoEdicion;
    renderizarTablas();
}
$("desbloquear-ficha").addEventListener("click", () => {
    if (!confirm("¿Querés habilitar la edición de esta ficha?")) {
    return;
    }
    modoEdicion = true;
    subitemActual.estado = "borrador";
    actualizarModo();
    actualizarEstado();
});
// ======================================
// 8. GUARDAR INFORMACIÓN
// ======================================
function actualizarEstado() {
    if (subitemActual.id.trim() === "") {
    alert("El subítem necesita un ID.");
    return false;
    }
    if (!subitemActual.descripcion.trim()) {
    alert("Ingresá una descripción.");
    return false;
    }
    if (!subitemActual.unidad.trim()) {
    alert("Ingresá una unidad.");
    return false;
    }
    const indice = subitems.findIndex(
    s => s.id === subitemActual.id
    );
    if (indice >= 0) {
    subitems[indice] = structuredClone(subitemActual);
    } else {
    subitems.push(structuredClone(subitemActual));
    }
    localStorage.setItem(CLAVE, JSON.stringify(subitems));
    return true;
}

function leerCampos() {
    subitemActual.descripcionAmpliada =
    campos.descripcionAmpliada.value.trim();
    subitemActual.observaciones =
    campos.observaciones.value.trim();
}

$("guardar-borrador").addEventListener("click", () => {
    leerCampos();
    subitemActual.estado = "borrador";
    if (actualizarEstado()) {
    alert("Borrador guardado correctamente.");
    }
});
$("publicar-ficha").addEventListener("click", () => {
    leerCampos();
    if (!confirm("¿Publicar y bloquear esta ficha?")) {
    return;
    }
    subitemActual.estado = "publicado";
    if (actualizarEstado()) {
    modoEdicion = false;
    cargarFicha();
    alert("Ficha publicada y bloqueada correctamente.");
    }
});
// ======================================
// 9. INICIALIZACIÓN
// ======================================
cargarFicha();
