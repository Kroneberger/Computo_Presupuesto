export const libros = [
    {
        id: "LIB-001",
        nombre: "Libro de Mario Chandías",
        autor: "Mario Chandías",
        tipo: "Libro técnico"
    }
];

export const fuentes = [
    {
        id: "FUE-001",
        numero: "1.1.1", //ESTE PUEDE SER EL NUMERO DE LA TABLA.
        libroId: "LIB-001",
        tipoTabla: "fuente",
        nombre: "Cantidades de mezclas",
        capitulo: "6",
        tabla: "",
        pagina: "115",
        imagen: "../Assets/fuentes/6.8.1_Cantidades-de-mezclas.png",
        descripcion: "Cantidades de mezcla para diferentes tipos de trabajo",
        observaciones: ""
    },
    {
        id: "FUE-002",
        numero: "1.1.4",
        libroId: "LIB-001",
        tipoTabla: "fuente",
        nombre: "Rendimiento de mano de obra",
        capitulo: "",
        tabla: "",
        pagina: "",
        imagen: "../Assets/fuentes/",
        descripcion: "Referencia para determinar rendimientos de ejecución.",
        observaciones: ""
    },
    {
        id: "FUE-003",
        numero: "6.12",
        libroId: "LIB-001",
        tipoTabla: "fuente",
        nombre: "Hormigones petros",
        capitulo: "6",
        tabla: "Tabla 6.12",
        pagina: "118",
        imagen: "../Assets/fuentes/6.12_Hormigones-Petros.png",
        descripcion: "Referencia para determinar rendimientos de ejecución.",
        observaciones: ""
    }
];