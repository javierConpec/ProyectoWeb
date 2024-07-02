"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarDestinoSchema = exports.insertarDestinoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const destinoBaseSchema = {
    nombres: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]+$')) // Patrón que permite solo letras sin espacios
        .max(100)
        .required(),
    apellidoPaterno: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]+$')) // Patrón que permite solo letras sin espacios
        .max(100)
        .required(),
    apellidoMaterno: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]+$')) // Patrón que permite solo letras sin espacios
        .max(100)
        .required(),
    username: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(100)
        .required(),
    email: joi_1.default.string()
        .email()
        .max(100)
        .required(),
    clave: joi_1.default.string()
        .max(100)
        .pattern(new RegExp('^[a-zA-Z0-9]+$')) // Patrón que permite letras mayúsculas, minúsculas y números
        .required(),
    telefono: joi_1.default.string()
        .pattern(new RegExp('^[0-9]{7,10}$')) // Patrón que permite de 7 a 10 dígitos numéricos
        .required(),
    direccion: joi_1.default.string()
        .max(100)
        .required(),
    sexo: joi_1.default.string()
        .valid('M', 'F', 'O') // Valores válidos para sexo: M (masculino), F (femenino), O (otro)
        .required(),
};
exports.insertarDestinoSchema = joi_1.default.object(Object.assign(Object.assign({}, destinoBaseSchema), { nombres: destinoBaseSchema.nombres.required(), apellidoPaterno: destinoBaseSchema.apellidoPaterno.required(), apellidoMaterno: destinoBaseSchema.apellidoMaterno.required(), email: destinoBaseSchema.email.required(), clave: destinoBaseSchema.clave.required(), telefono: destinoBaseSchema.telefono.required(), direccion: destinoBaseSchema.direccion.required(), sexo: destinoBaseSchema.sexo.required() }));
exports.modificarDestinoSchema = joi_1.default.object(Object.assign({}, destinoBaseSchema));
//# sourceMappingURL=destinoSchema.js.map