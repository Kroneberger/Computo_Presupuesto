
import { materiales } from "./database/materiales.js";
import { manoObra } from "./database/manodeobra.js";
import { equipos } from "./database/equipos.js";
import { subitemsIniciales } from "./database/subitems.js";
import { calcularAPU } from "./apu.js";


let subitems = structuredClone(subitemsIniciales);



// ======================================
// 1. CONFIGURACIÓN Y BASE DE DATOS
// ======================================

// Obtenemos el ID desde la URL
const parametros = new URLSearchParams(window.location.search);
const idURL = parametros.get("id");
// Buscamos el subítem en la base de datos
const subitemActual = subitemsIniciales.find(
    subitem => subitem.id === idURL
);
// Verificamos que exista
if (!subitemActual) {
    document.querySelector("main").innerHTML = `
        <section class="panel">
            <h2>Subítem no encontrado</h2>
            <p>No existe un subítem con el identificador solicitado.</p>
            <a href="../index.html">Volver a la página principal</a>
        </section>
    `;
} else {
    // Cargamos los datos principales
    document.getElementById("id").textContent =
        subitemActual.id;
    document.getElementById("descripcion").textContent =
        subitemActual.descripcion;
    document.getElementById("unidad").textContent =
        subitemActual.unidad;
}

// ======================================
// 2. ELEMENTOS HTML
// ======================================
const $ = id => document.getElementById(id);

// ======================================
// IDENTIFICACIÓN DEL SUBÍTEM
// ======================================

const subItemActual = cargarIdentificacion();



function estado () {
    const estadoText = subItemActual.estado;
    estadoSubItem.innerText = estadoText;
    if (subItemActual.estado === "borrador"){
        estadoSubItem.classList.add("estado-borrador");
    }
}
    

function cargarIdentificacion() {
    // Obtenemos el ID desde la URL
    const parametros = new URLSearchParams(
        window.location.search
    );
    const idSubitem = parametros.get("id");
    // Buscamos el subítem en la base de datos
    const subitem = subitemsIniciales.find(
        elemento => elemento.id === idSubitem
    );
    const estadoSubItem = document.getElementById("estado");
    // Verificamos que exista
    if (!subitem) {
        document.querySelector("main").innerHTML =
            "<h2>No se encontró el subítem solicitado.</h2>";
        return;
    }
    // Mostramos los datos principales
    document.getElementById("id").textContent =
        subitem.id;
    document.getElementById("unidad").textContent =
        subitem.unidad;
    document.getElementById("descripcion").textContent =
        subitem.descripcion;
    // Mostrar estado del subítem
    estadoSubItem.textContent =
        subitem.estado.toUpperCase();
    estadoSubItem.classList.remove(
        "estado-borrador",
        "estado-publicado"
    );
    estadoSubItem.classList.add(
        `estado-${subitem.estado}`
    );
    return subitem;
}


const campos = {
    id: document.getElementById("id"),
    descripcion: document.getElementById("descripcion"),
    unidad: document.getElementById("unidad"),
    item: document.getElementById("item"),
    descripcionAmpliada: document.getElementById("descripcion-ampliada"),
    observaciones: document.getElementById("observaciones")
};


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
    // Configuración de cada tipo de recurso.
    const configuracion = {
        material: {
            nombre: "materiales",
            titulo: "No requiere materiales",
            detalle: "Este subítem no necesita materiales.",
            pendiente: "Materiales pendientes de cargar",
            columnas: [
                "Material",
                "Unidad",
                "Cantidad por unidad",
                "Unidad comercial",
                "Precio unitario",
                "Precio parcial"
            ]
        },
        manoObra: {
            nombre: "mano de obra",
            titulo: "No requiere mano de obra",
            detalle: "Este subítem no necesita mano de obra.",
            pendiente: "Mano de obra pendiente de cargar",
            columnas: [
                "Personal",
                "Unidad",
                "Rendimiento por unidad",
                "Precio unitario",
                "Precio parcial"
            ]
        },
        equipo: {
            nombre: "equipos",
            titulo: "No requiere equipos",
            detalle: "Este subítem no necesita equipos.",
            pendiente: "Equipos pendientes de cargar",
            columnas: [
                "Equipo",
                "Unidad",
                "Cantidad por unidad",
                "Precio unitario",
                "Precio parcial"
            ]
        }
    };
    const config = configuracion[tipo];
    // 1. El recurso no es necesario.
    if (lista === null) {
        destino.innerHTML = `
            <div class="estado-recursos sin-insumos">
                <span class="icono-estado">✓</span>
                <div>
                    <strong>${config.titulo}</strong>
                    <p>${config.detalle}</p>
                </div>
            </div>
        `;
        return;
    }
    // 2. El recurso todavía no fue cargado.
    if (!Array.isArray(lista) || lista.length === 0) {
        destino.innerHTML = `
            <div class="estado-recursos recursos-pendientes">
                <strong>${config.pendiente}</strong>
            </div>
        `;
        return;
    }
    // 3. Construcción de la tabla.
    const tabla = document.createElement("table");
    const encabezado = document.createElement("tr");
    config.columnas.forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        encabezado.appendChild(th);
    });
    tabla.appendChild(encabezado);
    // Filas de recursos.
    lista.forEach(registro => {
        const insumo = base.find(
            elemento => elemento.id === registro.insumoId
        );
        if (!insumo) return;
        const fila = document.createElement("tr");
        const nombre = document.createElement("td");
        nombre.textContent = insumo.nombre;
        const unidad = document.createElement("td");
        unidad.textContent = insumo.unidad;
        const formatoMoneda = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2
        });
        fila.append(nombre, unidad);
        // Materiales.
        if (tipo === "material") {
            const cantidad = document.createElement("td");
            cantidad.textContent = `${(registro.cantidad.toFixed(2))} ${insumo.unidad}`;
            const unidadComercial = document.createElement("td");
            unidadComercial.textContent =
                insumo.unidadComercial || "—";
            const precioUnitario = document.createElement("td");
            precioUnitario.textContent = formatoMoneda.format(insumo.precio / insumo.equivalenciaComercial);
            const precioParcial = document.createElement("td");
            precioParcial.textContent = formatoMoneda.format(insumo.precio / insumo.equivalenciaComercial * registro.cantidad);
            fila.append(cantidad, unidadComercial, precioUnitario, precioParcial);
        }
        // Mano de obra.
        if (tipo === "manoObra") {
            const rendimiento = document.createElement("td");
            rendimiento.textContent = `${registro.rendimiento.toFixed(2)} ${insumo.unidad}`;
            const precioUnitario = document.createElement("td");
            precioUnitario.textContent = formatoMoneda.format(insumo.salario);
            const precioParcial = document.createElement("td");
            precioParcial.textContent = formatoMoneda.format(insumo.salario * registro.rendimiento);
            fila.append(rendimiento, precioUnitario, precioParcial);
        }
        // Equipos.
        if (tipo === "equipo") {
            const cantidad = document.createElement("td");
            cantidad.textContent = `${(registro.cantidad.toFixed(2))} ${insumo.unidad}`;
            const precioUnitario = document.createElement("td");
            precioUnitario.textContent = formatoMoneda.format(insumo.precio);
            const precioParcial = document.createElement("td");
            precioParcial.textContent = formatoMoneda.format(insumo.precio * registro.cantidad);
            fila.append(cantidad, precioUnitario, precioParcial);
        }
        tabla.appendChild(fila);
    });
    destino.appendChild(tabla);
}


// Renderizado general de recursos.
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
// 7. ANÁLISIS DE PRECIO UNITARIO
// ======================================

function renderizarAPU() {
    // Calculamos el APU del subítem actual
    const resultado = calcularAPU(
        subitemActual,
        materiales,
        manoObra,
        equipos
    );
    // Contenedor HTML
    const destino = $("tabla-apu");
    // Formato monetario
    const formatoMoneda = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2
    });
    // Mostrar resultados
    destino.innerHTML = `
        <h4>Costo directo</h4>
        <table>
            <tbody>
                <tr>
                    <td>Materiales</td>
                    <td>${formatoMoneda.format(resultado.costoMateriales)}</td>
                </tr>
                <tr>
                    <td>Mano de obra</td>
                    <td>${formatoMoneda.format(resultado.costoManoObra)}</td>
                </tr>
                <tr>
                    <td>Equipos</td>
                    <td>${formatoMoneda.format(resultado.costoEquipos)}</td>
                </tr>
                <tr>
                    <th>COSTO DIRECTO</th>
                    <th>${formatoMoneda.format(resultado.costoDirecto)}</th>
                </tr>
            </tbody>
        </table>
        <h4>Costo indirecto</h4>
        <table>
            <tbody>
                <tr>
                    <td>Beneficio (12,5%)</td>
                    <td>${formatoMoneda.format(resultado.beneficio)}</td>
                </tr>
                <tr>
                    <td>Gastos generales (15%)</td>
                    <td>${formatoMoneda.format(resultado.gastosGenerales)}</td>
                </tr>
                <tr>
                    <td>Gastos financieros (5%)</td>
                    <td>${formatoMoneda.format(resultado.gastosFinancieros)}</td>
                </tr>
                <tr>
                    <th>COSTO INDIRECTO</th>
                    <th>${formatoMoneda.format(resultado.costoIndirecto)}</th>
                </tr>
            </tbody>
        </table>
        <h3>
            PRECIO UNITARIO:<strong>
            ${formatoMoneda.format(resultado.precioUnitario)}
            / ${subitemActual.unidad}</strong>
        </h3>
    `;
}



// ======================================
// 6. CARGAR INFORMACIÓN DE LA FICHA
// ======================================

function cargarFicha() {
    // Información general
    campos.id.textContent = subitemActual.id;
    campos.descripcion.textContent = subitemActual.descripcion;
    campos.unidad.textContent = subitemActual.unidad;
    // Información complementaria
    campos.descripcionAmpliada.textContent = subitemActual.descripcionAmpliada || "Sin descripción ampliada.";
    campos.observaciones.textContent = subitemActual.observaciones || "Sin observaciones.";
    // Recursos
    renderizarTablas();
}


// ======================================
// 9. INICIALIZACIÓN
// ======================================
cargarFicha();
renderizarAPU();
// ------------------------------------
// SECCIÓN: MATERIALES
// ------------------------------------

// Elementos HTML
const buscarMaterial = document.getElementById("buscar-material");
const selectMaterial = document.getElementById("select-material");
const cantidadMaterial = document.getElementById("cantidad-material");
const botonAgregarMaterial = document.getElementById("agregar-material");
const tablaMateriales = document.getElementById("tabla-materiales");

// Materiales asociados al subítem
let materialesDelSubitem = [...(subitemActual.materiales || [])];

// Buscar un material por su ID
function obtenerMaterial(id) {
    return materiales.find(material => material.id === id);
}

// Actualizar las opciones del selector
function actualizarSelectorMateriales() {
    const busqueda = buscarMaterial.value.toLowerCase();
    const materialesFiltrados = materiales.filter(material =>
        material.nombre.toLowerCase().includes(busqueda) ||
        material.id.toLowerCase().includes(busqueda)
    );
    selectMaterial.innerHTML = '<option value="">Seleccionar...</option>';
    materialesFiltrados.forEach(material => {
        const opcion = document.createElement("option");
        opcion.value = material.id;
        opcion.textContent = `${material.id} - ${material.nombre}`;
        selectMaterial.appendChild(opcion);
    });
}
// Mostrar la tabla de materiales
function mostrarMateriales() {
    tablaMateriales.innerHTML = "";
    if (materialesDelSubitem.length === 0) {
        tablaMateriales.textContent = "Todavía no hay materiales agregados.";
        return;
    }
    const tabla = document.createElement("table");
    const encabezado = document.createElement("thead");
    encabezado.innerHTML = `
        <tr>
            <th>Material</th>
            <th>Unidad</th>
            <th>Cantidad por unidad</th>
            <th>Acciones</th>
        </tr>
    `;
    const cuerpo = document.createElement("tbody");
    materialesDelSubitem.forEach((recurso, indice) => {
        const material = obtenerMaterial(recurso.insumoId);
        if (!material) return;
        const fila = document.createElement("tr");
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = material.nombre;
        const celdaUnidad = document.createElement("td");
        celdaUnidad.textContent = material.unidad;
        const celdaCantidad = document.createElement("td");
        celdaCantidad.textContent = recurso.cantidad;
        const celdaAcciones = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
            materialesDelSubitem.splice(indice, 1);
            mostrarMateriales();
        });
        celdaAcciones.appendChild(botonEliminar);
        fila.append(
            celdaNombre,
            celdaUnidad,
            celdaCantidad,
            celdaAcciones
        );
        cuerpo.appendChild(fila);
    });
    tabla.append(encabezado, cuerpo);
    tablaMateriales.appendChild(tabla);
}
// Agregar un material al subítem
function agregarMaterial() {
    const materialId = selectMaterial.value;
    const cantidad = Number(cantidadMaterial.value);
    if (!materialId) {
        alert("Seleccioná un material.");
        return;
    }
    if (cantidadMaterial.value.trim() === "" ||
        !Number.isFinite(cantidad) ||
        cantidad <= 0) {
        alert("Ingresá una cantidad válida mayor que cero.");
        return;
    }
    const yaExiste = materialesDelSubitem.some(
        recurso => recurso.insumoId === materialId
    );
    if (yaExiste) {
        alert("Este material ya fue agregado al subítem.");
        return;
    }
    materialesDelSubitem.push({
        insumoId: materialId,
        cantidad: cantidad
    });
    cantidadMaterial.value = "";
    selectMaterial.value = "";
    mostrarMateriales();
}
// Eventos
buscarMaterial.addEventListener("input", actualizarSelectorMateriales);
botonAgregarMaterial.addEventListener("click", agregarMaterial);
// Carga inicial
actualizarSelectorMateriales();
mostrarMateriales();
estado();