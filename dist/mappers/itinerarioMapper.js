"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrismaItinerario = exports.fromPrismaItinerario = void 0;
const viajeMapper_1 = require("./viajeMapper");
const fromPrismaItinerario = (itinerario, viaje, destino, paquete, categoria, hospedaje, pais) => ({
    idItinerario: itinerario.id_itenerario,
    viaje: (0, viajeMapper_1.fromPrismaViaje)(viaje, paquete, categoria, hospedaje, destino, pais),
    dia: itinerario.dia,
    horaInicio: itinerario.hora_inicio,
    horaFin: itinerario.hora_fin,
    actividad: itinerario.actividad,
    descripcion: itinerario.descripcion
});
exports.fromPrismaItinerario = fromPrismaItinerario;
const toPrismaItinerario = (itinerario) => ({
    i_itinerario: itinerario.idItinerario,
    id_viaje: itinerario.viaje.idViaje,
    dia: itinerario.dia,
    hora_inicio: itinerario.horaInicio,
    hora_fin: itinerario.horaFin,
    actividad: itinerario.actividad,
    descripcion: itinerario.dscripcion
});
exports.toPrismaItinerario = toPrismaItinerario;
//# sourceMappingURL=itinerarioMapper.js.map