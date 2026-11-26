
export const subitemsIniciales = [

    // 1.1 - Preparación del terreno
    {
        id: "SUB-001",
        codigo: "1.1.1",
        descripcion: "Limpieza del terreno",
        unidad: "m²",
        itemId: "IT-01.1",

        materiales: null,
        manoObra: [
            {insumoId: "MO-002",rendimiento: 0.80}
        ],
        equipos: [
            {insumoId: "EQ-003", cantidad: 0.70}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-002",
        codigo: "1.1.2",
        descripcion: "Desmalezamiento",
        unidad: "m²",
        itemId: "IT-01.1",

        materiales: null,
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80}
        ],
        equipos: [
            {insumoId: "EQ-003", cantidad: 0.70},
            {insumoId: "EQ-005", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-003",
        codigo: "1.1.3",
        descripcion: "Retiro de escombros",
        unidad: "m³",
        itemId: "IT-01.1",

        materiales: null,
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80}
        ],
        equipos: [
            {insumoId: "EQ-003", cantidad: 0.70},
            {insumoId: "EQ-005", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },

    // 1.2 - Replanteo
    {
        id: "SUB-004",
        codigo: "1.2.1",
        descripcion: "Replanteo de obra",
        unidad: "m²",
        itemId: "IT-01.2",

        materiales: [],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80}
        ],
        equipos: [
            {insumoId: "EQ-003", cantidad: 0.70},
            {insumoId: "EQ-005", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-005",
        codigo: "1.2.2",
        descripcion: "Nivelación del terreno",
        unidad: "m²",
        itemId: "IT-01.2",

        materiales: null,
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80}
        ],
        equipos: [
            {insumoId: "EQ-003", cantidad: 0.70},
            {insumoId: "EQ-005", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    //2-Moviemiento de suelos
    {
        id: "SUB-006",
        codigo: "2.1.1",
        descripcion: "Relleno y nivelacion",
        itemId: "IT-02.1",

        materiales: null,
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80}
        ],
        equipos: [
            {insumoId: "EQ-003", cantidad: 0.70},
            {insumoId: "EQ-005", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },

    // 3-Estructura
    {
        id: "SUB-007",
        codigo: "3.1.1",
        descripcion: "Cimientos de hormigon pobre de cascote",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: null,
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80}
        ],
        equipos: [
            {insumoId: "EQ-003", cantidad: 0.70},
            {insumoId: "EQ-005", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-008",
        codigo: "3.1.2",
        descripcion: "Vigas de fundacion",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 300},
            {insumoId: "MAT-003", cantidad: 750},
            {insumoId: "MAT-007", cantidad: 900},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: 1.2},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-002", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-009",
        codigo: "3.1.3",
        descripcion: "Bases aisladas",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 300},
            {insumoId: "MAT-003", cantidad: 750},
            {insumoId: "MAT-007", cantidad: 900},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: 1.2},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-002", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-010",
        codigo: "3.1.4",
        descripcion: "Zapata",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 300},
            {insumoId: "MAT-003", cantidad: 750},
            {insumoId: "MAT-007", cantidad: 900},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: 1.2},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-002", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-011",
        codigo: "3.1.5",
        descripcion: "Plate de fundacion 12cm. Malla Sima Q198",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 300},
            {insumoId: "MAT-003", cantidad: 750},
            {insumoId: "MAT-007", cantidad: 900},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: 1.2},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-002", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-012",
        codigo: "3.1.6",
        descripcion: "Columnas",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 300},
            {insumoId: "MAT-003", cantidad: 750},
            {insumoId: "MAT-007", cantidad: 900},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: 1.2},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-002", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-013",
        codigo: "3.1.7",
        descripcion: "Vigas",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 300},
            {insumoId: "MAT-003", cantidad: 750},
            {insumoId: "MAT-007", cantidad: 900},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: 1.2},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-002", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-014",
        codigo: "3.1.8",
        descripcion: "Losa llena",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 300},
            {insumoId: "MAT-003", cantidad: 750},
            {insumoId: "MAT-007", cantidad: 900},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: 1.2},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-002", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-015",
        codigo: "3.1.9",
        descripcion: "Escaleras",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 300},
            {insumoId: "MAT-003", cantidad: 750},
            {insumoId: "MAT-007", cantidad: 900},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: 1.2},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-002", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    //4 - Mamposteria
    {
        id: "SUB-016",
        codigo: "4.1.1",
        descripcion: "Mamposteria de ladrillo comun",
        unidad: "m²",
        itemId: "IT-04.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 5},
            {insumoId: "MAT-005", cantidad: 15.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-004", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-017",
        codigo: "4.1.2",
        descripcion: "Mamposteria de ladrillo ceramico hueco 8x18x33",
        unidad: "m²",
        itemId: "IT-04.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 5},
            {insumoId: "MAT-005", cantidad: 15.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-004", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-018",
        codigo: "4.1.3",
        descripcion: "Mamposteria de ladrillo ceramico hueco 12x18x33",
        unidad: "m²",
        itemId: "IT-04.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 5},
            {insumoId: "MAT-005", cantidad: 15.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-004", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },
    {
        id: "SUB-019",
        codigo: "4.1.4",
        descripcion: "Mamposteria de ladrillo ceramico hueco 18x18x33",
        unidad: "m²",
        itemId: "IT-04.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 5},
            {insumoId: "MAT-005", cantidad: 15.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
            {insumoId: "EQ-004", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        estado: "borrador"
    },

];
