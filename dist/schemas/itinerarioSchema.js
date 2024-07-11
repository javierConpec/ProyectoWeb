"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarItinerarioSchema = exports.insertarItinerarioSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const itinerarioBaseSchema = {
    dia: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]+$')) // Patrón que permite solo letras sin espacios
        .max(100),
    horaInicio: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z0-9 ]+$')) // Patrón que permite letras, números y espacios
        .max(100),
    horaFin: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z0-9 ]+$')) // Patrón que permite letras, números y espacios
        .max(100),
    actividad: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]+$')) // Patrón que permite solo letras sin espacios
        .max(100),
    descripcion: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]+$')) // Patrón que permite solo letras sin espacios
        .max(1024)
};
exports.insertarItinerarioSchema = joi_1.default.object(Object.assign(Object.assign({}, itinerarioBaseSchema), { dia: itinerarioBaseSchema.dia.required(), horaInicio: itinerarioBaseSchema.horaInicio.required(), horafin: itinerarioBaseSchema.horaFin.required(), actividad: itinerarioBaseSchema.actividad.required(), descripcion: itinerarioBaseSchema.descripcion.required() }));
exports.modificarItinerarioSchema = joi_1.default.object(Object.assign({}, itinerarioBaseSchema));
//# sourceMappingURL=itinerarioSchema.js.map