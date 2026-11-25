
/* =================================
   COMPUTO Y PRESUPUESTO
   Archivo principal de JavaScript
================================= */


// En esta sección incorporaremos las
// funciones generales de la página.


// Próximamente:
// - Menús desplegables.
// - Navegación dinámica.
// - Carga de rubros.

/* =================================
   COMPUTO Y PRESUPUESTO
   MENU DESPLEGABLE DE RUBROS
================================= */


/* =================================
   1. BASE DE DATOS DE PRUEBA
================================= */

const rubros = {

    preliminares: [

        {
            nombre: "1.1 Preparación del terreno",

            subitems: [
                "1.1.1 Limpieza del terreno",
                "1.1.2 Desmalezamiento",
                "1.1.3 Retiro de escombros"
            ]

        },

        {
            nombre: "1.2 Replanteo",

            subitems: [
                "1.2.1 Replanteo de obra",
                "1.2.2 Nivelación del terreno"
            ]

        }

    ],


    estructura: [

        {
            nombre: "2.1 Fundaciones",

            subitems: [
                "2.1.1 Excavación para bases",
                "2.1.2 Hormigón de limpieza",
                "2.1.3 Hormigón armado en bases"
            ]

        },

        {
            nombre: "2.2 Estructura resistente",

            subitems: [
                "2.2.1 Columnas de hormigón armado",
                "2.2.2 Vigas de hormigón armado",
                "2.2.3 Losas de hormigón armado"
            ]

        }

    ],


    albanileria: [

        {
            nombre: "3.1 Mamposterías",

            subitems: [
                "3.1.1 Mampostería de ladrillo común",
                "3.1.2 Mampostería de ladrillo hueco",
                "3.1.3 Mampostería de bloques"
            ]

        },

        {
            nombre: "3.2 Revoques",

            subitems: [
                "3.2.1 Revoque grueso",
                "3.2.2 Revoque fino",
                "3.2.3 Revoque exterior"
            ]

        }

    ],


    instalaciones: [

        {
            nombre: "4.1 Instalación sanitaria",

            subitems: [
                "4.1.1 Desagües cloacales",
                "4.1.2 Desagües pluviales",
                "4.1.3 Distribución de agua fría"
            ]

        },

        {
            nombre: "4.2 Instalación eléctrica",

            subitems: [
                "4.2.1 Canalizaciones",
                "4.2.2 Cableado eléctrico",
                "4.2.3 Colocación de cajas"
            ]

        }

    ]

};


/* =================================
   2. GENERAR LISTA DE ITEMS
================================= */

function generarItems(rubro, contenedor) {

    // Obtenemos los grupos del rubro seleccionado

    const grupos = rubros[rubro];


    // Recorremos todos los grupos

    grupos.forEach(grupo => {

        // Creamos el contenedor del grupo

        const grupoElemento = document.createElement("div");

        grupoElemento.classList.add("grupo-item");


        // Creamos el titulo del grupo

        const titulo = document.createElement("h4");

        titulo.textContent = grupo.nombre;


        // Creamos la lista de subitems

        const lista = document.createElement("ul");

        lista.classList.add("lista-subitems");


        // Recorremos los subitems

        grupo.subitems.forEach(subitem => {

            const elemento = document.createElement("li");

            const enlace = document.createElement("a");

            enlace.href = "#";

            enlace.textContent = subitem;


            // Agregamos el enlace a la lista

            elemento.appendChild(enlace);

            lista.appendChild(elemento);

        });


        // Agregamos todo al grupo

        grupoElemento.appendChild(titulo);

        grupoElemento.appendChild(lista);


        // Agregamos el grupo al contenedor

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
