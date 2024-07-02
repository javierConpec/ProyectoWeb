import Joi from "joi";

const destinoBaseSchema = {
    nombres: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+$'))  // Patrón que permite solo letras sin espacios
        .max(100)
        .required(),
    apellidoPaterno: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+$'))  // Patrón que permite solo letras sin espacios
        .max(100)
        .required(),
    apellidoMaterno: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+$'))  // Patrón que permite solo letras sin espacios
        .max(100)
        .required(),
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(100)
        .required(),    
    email: Joi.string()
        .email()
        .max(100)
        .required(),
    clave: Joi.string()
        .max(100)
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

export const insertarDestinoSchema = Joi.object({
    ...destinoBaseSchema,
    nombres: destinoBaseSchema.nombres.required(),
    apellidoPaterno: destinoBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: destinoBaseSchema.apellidoMaterno.required(),
    email: destinoBaseSchema.email.required(),
    clave: destinoBaseSchema.clave.required(),
    telefono: destinoBaseSchema.telefono.required(),
    direccion: destinoBaseSchema.direccion.required(),
    sexo: destinoBaseSchema.sexo.required(),
});

export const modificarDestinoSchema = Joi.object({
    ...destinoBaseSchema
});
