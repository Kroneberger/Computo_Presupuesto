// ======================================
// 1. PORCENTAJES DE COSTOS INDIRECTOS
// ======================================
export const porcentajesAPU = {
    beneficio: 0.125,
    gastosGenerales: 0.15,
    gastosFinancieros: 0.05
};
// ======================================
// 2. FUNCIÓN DE CÁLCULO DEL APU
// ======================================
export function calcularAPU(subitem, materiales, manoObra, equipos) {
    // COSTO DE MATERIALES
    const costoMateriales = (subitem.materiales || []).reduce(
        (total, recurso) => {
            const material = materiales.find(
                elemento => elemento.id === recurso.insumoId
            );
            if (!material) return total;
            return total + material.precio / material.equivalenciaComercial * recurso.cantidad;
        },
        0
    );
    // COSTO DE MANO DE OBRA
    const costoManoObra = (subitem.manoObra || []).reduce(
        (total, recurso) => {
            const personal = manoObra.find(
                elemento => elemento.id === recurso.insumoId
            );
            if (!personal) return total;
            return total + personal.salario * recurso.rendimiento;
        },
        0
    );
    // COSTO DE EQUIPOS
    const costoEquipos = (subitem.equipos || []).reduce(
        (total, recurso) => {
            const equipo = equipos.find(
                elemento => elemento.id === recurso.insumoId
            );
            if (!equipo) return total;
            return total + equipo.precio * recurso.cantidad;
        },
        0
    );
    // COSTO DIRECTO
    const costoDirecto =
        costoMateriales +
        costoManoObra +
        costoEquipos;
    // COSTOS INDIRECTOS
    const beneficio =
        costoDirecto * porcentajesAPU.beneficio;
    const gastosGenerales =
        costoDirecto * porcentajesAPU.gastosGenerales;
    const gastosFinancieros =
        costoDirecto * porcentajesAPU.gastosFinancieros;
    // COSTO INDIRECTO TOTAL
    const costoIndirecto =
        beneficio +
        gastosGenerales +
        gastosFinancieros;
    // PRECIO UNITARIO FINAL
    const precioUnitario =
        costoDirecto + costoIndirecto;
    // DEVOLVER RESULTADOS
    return {
        costoMateriales,
        costoManoObra,
        costoEquipos,
        costoDirecto,
        beneficio,
        gastosGenerales,
        gastosFinancieros,
        costoIndirecto,
        precioUnitario
    };
}
