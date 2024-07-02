import Joi from "joi";

const usuarioBaseSchema = {
    nombres: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]$'))
        .max(100)
        .required(),
    apellidoPaterno: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]$'))
        .max(100)
        .required(),
    apellidoMaterno: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]$'))
        .max(100)
        .required(),
    username: Joi.string()
        .alphanum()
        .min(3)  // Mínimo 3 caracteres
        .max(100)  // Máximo 30 caracteres
        .required(),    
    email: Joi.string()
        .email()
        .max(100)
        .required(),
    clave: Joi.string()
        .max(100)  // Por ejemplo, máximo 20 caracteres
        .pattern(new RegExp('^[a-zA-Z0-9]+$'))  // Patrón que permite letras mayúsculas, minúsculas y números
        .required(),
    telefono: Joi.string()
        .pattern(new RegExp('^[0-9]{7,10}$'))  // Patrón que permite de 7 a 10 dígitos numéricos
        .required(),
    direccion: Joi.string()
        .max(100)
        .required(),
    sexo: Joi.string()
        .valid('M', 'F', 'O')  // Valores válidos para sexo: M (masculino), F (femenino), O (otro)
        .required(),
};

export const insertarUsuarioSchema = Joi.object({
    ...usuarioBaseSchema,
    nombres: usuarioBaseSchema.nombres.required(),
    apellidoPaterno: usuarioBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: usuarioBaseSchema.apellidoMaterno.required(),
    email: usuarioBaseSchema.email.required(),
    clave: usuarioBaseSchema.clave.required(),
    telefono: usuarioBaseSchema.telefono.required(),
    direccion: usuarioBaseSchema.direccion.required(),
    sexo: usuarioBaseSchema.sexo.required(),
});

export const modificarUsuarioSchema = Joi.object({
    ...usuarioBaseSchema
});
