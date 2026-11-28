
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
        fuentesCalculo: ["FUE-001"],
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
        fuentesCalculo: ["FUE-001"],
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
        fuentesCalculo: ["FUE-001"],
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
        fuentesCalculo: ["FUE-001"],
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
        fuentesCalculo: ["FUE-001"],
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
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },

    // 3-Estructura
    {
        id: "SUB-007",
        codigo: "3.1.1",
        descripcion: "Cimientos de hormigon pobre de cascote",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 300},
            {insumoId: "MAT-003", cantidad: 0.600},
            {insumoId: "MAT-007", cantidad: 0.750},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80}
        ],
        equipos: [
            {insumoId: "EQ-003", cantidad: 0.70},
            {insumoId: "EQ-005", cantidad: 0.40}
        ],

        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001", "FUE-002"],
        estado: "borrador"
    },
    {
        id: "SUB-008",
        codigo: "3.1.2",
        descripcion: "Vigas de fundacion",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 350},
            {insumoId: "MAT-003", cantidad: 0.500},
            {insumoId: "MAT-007", cantidad: 0.750},
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
        fuentesCalculo: ["FUE-001", "FUE-002"],
        estado: "borrador"
    },
    {
        id: "SUB-009",
        codigo: "3.1.3",
        descripcion: "Bases aisladas",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 350},
            {insumoId: "MAT-003", cantidad: 0.500},
            {insumoId: "MAT-007", cantidad: 0.750},
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
        fuentesCalculo: ["FUE-001", "FUE-002"],
        estado: "borrador"
    },
    {
        id: "SUB-010",
        codigo: "3.1.4",
        descripcion: "Zapata",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 350},
            {insumoId: "MAT-003", cantidad: 0.500},
            {insumoId: "MAT-007", cantidad: 0.750},
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
        fuentesCalculo: ["FUE-001", "FUE-002"],
        estado: "borrador"
    },
    {
        id: "SUB-011",
        codigo: "3.1.5",
        descripcion: "Plate de fundacion 12cm. Malla Sima Q198",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 350},
            {insumoId: "MAT-003", cantidad: 0.500},
            {insumoId: "MAT-007", cantidad: 0.750},
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
        fuentesCalculo: ["FUE-001", "FUE-002"],
        estado: "borrador"
    },
    {
        id: "SUB-012",
        codigo: "3.1.6",
        descripcion: "Columnas",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 350},
            {insumoId: "MAT-003", cantidad: 0.500},
            {insumoId: "MAT-007", cantidad: 0.750},
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
        fuentesCalculo: ["FUE-001", "FUE-002"],
        estado: "borrador"
    },
    {
        id: "SUB-013",
        codigo: "3.1.7",
        descripcion: "Vigas",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 350},
            {insumoId: "MAT-003", cantidad: 0.500},
            {insumoId: "MAT-007", cantidad: 0.750},
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
        fuentesCalculo: ["FUE-001", "FUE-002"],
        estado: "borrador"
    },
    {
        id: "SUB-014",
        codigo: "3.1.8",
        descripcion: "Losa llena",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 350},
            {insumoId: "MAT-003", cantidad: 0.500},
            {insumoId: "MAT-007", cantidad: 0.750},
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
        fuentesCalculo: ["FUE-001", "FUE-002"],
        estado: "borrador"
    },
    {
        id: "SUB-015",
        codigo: "3.1.9",
        descripcion: "Escaleras",
        unidad: "m³",
        itemId: "IT-03.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 350},
            {insumoId: "MAT-003", cantidad: 0.500},
            {insumoId: "MAT-007", cantidad: 0.750},
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
        fuentesCalculo: ["FUE-001", "FUE-002"],
        estado: "borrador"
    },
    //4 - Mamposteria
    {
        id: "SUB-016",
        codigo: "4.1",
        descripcion: "Mamposteria de ladrillo comun",
        unidad: "m²",
        itemId: "IT-04",

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
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-017",
        codigo: "4.2",
        descripcion: "Mamposteria de ladrillo ceramico hueco 8x18x33",
        unidad: "m²",
        itemId: "IT-04",

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
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-018",
        codigo: "4.3",
        descripcion: "Mamposteria de ladrillo ceramico hueco 12x18x33",
        unidad: "m²",
        itemId: "IT-04",

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
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-019",
        codigo: "4.4",
        descripcion: "Mamposteria de ladrillo ceramico hueco 18x18x33",
        unidad: "m²",
        itemId: "IT-04",

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
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    //TABIQUERIA
    {
        id: "SUB-020",
        codigo: "5.1",
        descripcion: "Tabique Simple  95mm - Tipo Durlock placa de yeso de 12,5 mm",
        unidad: "m²",
        itemId: "IT-05",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    //06-ASILACIONES
    {
        id: "SUB-021",
        codigo: "6.1",
        descripcion: "Cajón hidrófugo para muro de 0,30 (incluye 2 hiladas de ladrillo común)",
        unidad: "ml",
        itemId: "IT-06",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-022",
        codigo: "6.2",
        descripcion: "Cajón hidrófugo para muro de 0,20 (incluye 2 hiladas de ladrillo común)",
        unidad: "ml",
        itemId: "IT-06",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-023",
        codigo: "6.3",
        descripcion: "Cajón hidrófugo para muro de 0,15 y 0,10 (incluye 2 hiladas de ladrillo común)",
        unidad: "ml",
        itemId: "IT-06",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-024",
        codigo: "6.4",
        descripcion: "Capa aisladora vertical con hidrófugo incorporado",
        unidad: "m²",
        itemId: "IT-06",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-025",
        codigo: "6.5",
        descripcion: "Infiltracion de bloqueador hidrostatico en muros macizos con humedad de cimientos",
        unidad: "m²",
        itemId: "IT-06",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "Incluye picado de revoque y reparacion final de los mismos",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    //07-REVOQUES
    {
        id: "SUB-026",
        codigo: "7.1",
        descripcion: "Revoque interior completo a la cal",
        unidad: "m²",
        itemId: "IT-07",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 1.5},
            {insumoId: "MAT-004", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-027",
        codigo: "7.2",
        descripcion: "Revoque exterior completo a la cal",
        unidad: "m²",
        itemId: "IT-07",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 1.5},
            {insumoId: "MAT-004", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-028",
        codigo: "7.3",
        descripcion: "Azotado de concreto con hidrófugo incorporado",
        unidad: "m²",
        itemId: "IT-07",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 1.5},
            {insumoId: "MAT-004", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-029",
        codigo: "7.4",
        descripcion: "Grueso a la cal bajo fino interior",
        unidad: "m²",
        itemId: "IT-07",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 1.5},
            {insumoId: "MAT-004", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-030",
        codigo: "7.5",
        descripcion: "Grueso a la cal bajo fino exterior",
        unidad: "m²",
        itemId: "IT-07",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 1.5},
            {insumoId: "MAT-004", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-031",
        codigo: "7.6",
        descripcion: "Grueso reforzado bajo revestimiento cerámico",
        unidad: "m²",
        itemId: "IT-07",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 1.5},
            {insumoId: "MAT-004", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-032",
        codigo: "7.7",
        descripcion: "Fino al fieltro interior",
        unidad: "m²",
        itemId: "IT-07",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 1.5},
            {insumoId: "MAT-004", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-033",
        codigo: "7.8",
        descripcion: "Fino al fieltro exterior",
        unidad: "m²",
        itemId: "IT-07",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1.5},
            {insumoId: "MAT-003", cantidad: 1.5},
            {insumoId: "MAT-004", cantidad: 1.5},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    //08-CONTRAPISOS Y CARPETAS
    {
        id: "SUB-034",
        codigo: "8.1",
        descripcion: "Contrapiso s/ terreno natural espesor: 12 cm",
        unidad: "m²",
        itemId: "IT-08",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
            {insumoId: "MAT-008", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-035",
        codigo: "8.2",
        descripcion: "Contrap.s/T.N esp: 12 cm (con barrera de vapor: Nylon-200 micrones)",
        unidad: "m²",
        itemId: "IT-08",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
            {insumoId: "MAT-008", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-036",
        codigo: "8.3",
        descripcion: "Contrapiso armado sobre  terreno natural -  esp: 15 cm",
        unidad: "m²",
        itemId: "IT-08",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
            {insumoId: "MAT-008", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-037",
        codigo: "8.4",
        descripcion: "Carpeta de concreto bajo piso",
        unidad: "m²",
        itemId: "IT-08",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
            {insumoId: "MAT-008", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-038",
        codigo: "8.5",
        descripcion: "Contrapiso s/ terreno natural espesor: 10 cm",
        unidad: "m²",
        itemId: "IT-08",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
            {insumoId: "MAT-008", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    //09-REVESTIMIENTOS
    {
        id: "SUB-039",
        codigo: "9.1",
        descripcion: "Revestimiento de zulejos 15x15",
        unidad: "m²",
        itemId: "IT-09",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-040",
        codigo: "9.2",
        descripcion: "Revestimiento de azulejos 10x20",
        unidad: "m²",
        itemId: "IT-09",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-041",
        codigo: "9.3",
        descripcion: "Revestimiento ceramico 40x40",
        unidad: "m²",
        itemId: "IT-09",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    //10-PISOS, ZOCALOS Y UMBRALES
    {
        id: "SUB-042",
        codigo: "10.1.1",
        descripcion: "Mosaico granitico 40x40 fondo gris",
        unidad: "m²",
        itemId: "IT-10.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-043",
        codigo: "10.1.2",
        descripcion: "Mosaico granitico 30x30 fondo gris",
        unidad: "m²",
        itemId: "IT-10.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-044",
        codigo: "10.1.3",
        descripcion: "Piso baldosa ceramica 40x40",
        unidad: "m²",
        itemId: "IT-10.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-045",
        codigo: "10.1.4",
        descripcion: "Piso baldosa ceramica 50x50",
        unidad: "m²",
        itemId: "IT-10.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-046",
        codigo: "10.1.5",
        descripcion: "Piso baldosa ceramica 60x60",
        unidad: "m²",
        itemId: "IT-10.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-047",
        codigo: "10.1.6",
        descripcion: "Piso flotante 8mm espesor",
        unidad: "m²",
        itemId: "IT-10.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-048",
        codigo: "10.2.1",
        descripcion: "Baldoson Hormigon 60x60",
        unidad: "m²",
        itemId: "IT-10.2",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-049",
        codigo: "10.2.2",
        descripcion: "Pavimento intertrabado de adoquines de hormigón",
        unidad: "m²",
        itemId: "IT-10.2",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-050",
        codigo: "10.3.1",
        descripcion: "Zocalo Porcelanato 60x8",
        unidad: "ml",
        itemId: "IT-10.3",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-051",
        codigo: "10.3.2",
        descripcion: "Zocalo Porcelanato 50x8",
        unidad: "ml",
        itemId: "IT-10.3",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-052",
        codigo: "10.3.3",
        descripcion: "Zocalo Porcelanato 40x8",
        unidad: "ml",
        itemId: "IT-10.3",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-053",
        codigo: "10.3.4",
        descripcion: "Zocalo MDF blanco",
        unidad: "ml",
        itemId: "IT-10.3",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
            {insumoId: "MAT-003", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    //11-MARMOLERIA
    {
        id: "SUB-054",
        codigo: "11.1",
        descripcion: "Mesada de Granito Natural",
        unidad: "m²",
        itemId: "IT-11",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-055",
        codigo: "11.2",
        descripcion: "Mesada de marmol",
        unidad: "m²",
        itemId: "IT-11",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    //12-CUBIERTAS Y TECHADOS
    {
        id: "SUB-056",
        codigo: "12.1.1",
        descripcion: "Chapa aluminizada Cincalum Nº 25 sobre estructura de madera + Mexpol + Machimbre",
        unidad: "m²",
        itemId: "IT-12.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-057",
        codigo: "12.2.1",
        descripcion: "Canaleta estándar H°G° Nº 25 (desarrollo 0,33 m)",
        unidad: "ml",
        itemId: "IT-12.2",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-058",
        codigo: "12.2.2",
        descripcion: "Canaleta tipo cenefa Hº Gº Nº 25 (desarrollo 0,50m)",
        unidad: "ml",
        itemId: "IT-12.2",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-059",
        codigo: "12.2.3",
        descripcion: "Canaleta embutida H°G° Nº 25 (desarrollo 0,50 m)",
        unidad: "ml",
        itemId: "IT-12.2",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-060",
        codigo: "12.3.1",
        descripcion: "Tirante de Pino 3x5",
        unidad: "ml",
        itemId: "IT-12.3",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-061",
        codigo: "13.1.1",
        descripcion: "Yeso suspendido Durlock estandar 12,5mm",
        unidad: "m²",
        itemId: "IT-13.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-062",
        codigo: "13.1.2",
        descripcion: "Tipo Durlock con placa de yeso resistente a la humedad",
        unidad: "m²",
        itemId: "IT-13.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-063",
        codigo: "13.1.3",
        descripcion: "Tipo Durlock desmontable placa texturada 606x606",
        unidad: "m²",
        itemId: "IT-13.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-064",
        codigo: "13.1.4",
        descripcion: "A la cal suspendido",
        unidad: "m²",
        itemId: "IT-13.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-065",
        codigo: "13.1.5",
        descripcion: "Cielorraso de madera machimbrada",
        unidad: "m²",
        itemId: "IT-13.1",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-066",
        codigo: "13.2.1",
        descripcion: "Yeso aplicado bajo losa",
        unidad: "m²",
        itemId: "IT-13.2",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },
    {
        id: "SUB-067",
        codigo: "13.2.2",
        descripcion: "A la cal aplicado bajo Losa",
        unidad: "m²",
        itemId: "IT-13.2",

        materiales: [
            {insumoId: "MAT-001", cantidad: 1},
        ],
        manoObra: [
            {insumoId: "MO-001",rendimiento: 0.80},
            {insumoId: "MO-002",rendimiento: .8},
        ],
        equipos: [
            {insumoId: "EQ-001", cantidad: 0.70},
        ],
        descripcionAmpliada: "",
        observaciones: "",
        fuentesCalculo: ["FUE-001"],
        estado: "borrador"
    },

];
