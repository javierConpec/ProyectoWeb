"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarUsuarioSchema = exports.insertarUsuarioSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const usuarioBaseSchema = {
    nombres: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]$'))
        .max(100)
        .required(),
    apellidoPaterno: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]$'))
        .max(100)
        .required(),
    apellidoMaterno: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z]$'))
        .max(100)
        .required(),
    username: joi_1.default.string()
        .alphanum()
        .min(3) // Mínimo 3 caracteres
        .max(100) // Máximo 30 caracteres
        .required(),
    email: joi_1.default.string()
        .email()
        .max(100)
        .required(),
    clave: joi_1.default.string()
        .max(100) // Por ejemplo, máximo 20 caracteres
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
exports.insertarUsuarioSchema = joi_1.default.object(Object.assign(Object.assign({}, usuarioBaseSchema), { nombres: usuarioBaseSchema.nombres.required(), apellidoPaterno: usuarioBaseSchema.apellidoPaterno.required(), apellidoMaterno: usuarioBaseSchema.apellidoMaterno.required(), email: usuarioBaseSchema.email.required(), clave: usuarioBaseSchema.clave.required(), telefono: usuarioBaseSchema.telefono.required(), direccion: usuarioBaseSchema.direccion.required(), sexo: usuarioBaseSchema.sexo.required() }));
exports.modificarUsuarioSchema = joi_1.default.object(Object.assign({}, usuarioBaseSchema));
//# sourceMappingURL=usuarioSchema.js.map