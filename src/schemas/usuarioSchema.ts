import Joi from "joi";

const usuarioBaseSchema = {
    nombres: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]+$'))
        .max(100)
        ,
    apellidoPaterno: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]+$'))
        .max(100)
        ,
    apellidoMaterno: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]+$'))
        .max(100)
        ,
    username: Joi.string()
        .alphanum()
        .min(3)  // Mínimo 3 caracteres
        .max(100)  // Máximo 30 caracteres
        ,    
    email: Joi.string()
        .email()
        .max(100)
        ,
    clave: Joi.string()
        .max(100)  
        .pattern(new RegExp('^[a-zA-Z0-9]+$'))  // Patrón que permite letras mayúsculas, minúsculas y números
        ,
    telefono: Joi.string()
        .pattern(new RegExp('^[0-9]{9}$'))  // Patrón que permite de 9 digitos
        ,
    direccion: Joi.string()
        .max(100),
    sexo: Joi.string()
        .valid('M','F','0')  // Valores válidos para sexo: M (masculino), F (femenino), O(otro)
        ,

    rol:Joi.object({
        idRol:Joi.number()
        .integer()
        .positive()
        .required()
    })
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