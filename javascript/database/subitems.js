
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

    // 2.1 - Fundaciones
    {
        id: "SUB-006",
        codigo: "2.1.1",
        descripcion: "Excavación para bases",
        unidad: "m³",
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
    {
        id: "SUB-007",
        codigo: "2.1.2",
        descripcion: "Hormigón de limpieza",
        unidad: "m³",
        itemId: "IT-02.1",

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
        id: "SUB-008",
        codigo: "2.1.3",
        descripcion: "Hormigón armado en bases",
        unidad: "m³",
        itemId: "IT-02.1",

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
    }

];
