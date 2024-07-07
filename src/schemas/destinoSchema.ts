import Joi from "joi";

const destinoBaseSchema = {
    nombre: Joi.string()
        .pattern(new RegExp('^[a-zA-Z\\s]+$'))  // Permite solo letras y espacios
        .max(100),
    pais: Joi.number()
        .integer()
        .positive()  // Agrega la validación para el campo pais
};

export const insertarDestinoSchema = Joi.object({
    ...destinoBaseSchema,
    nombre: destinoBaseSchema.nombre.required(),
    pais: destinoBaseSchema.pais.required(),
});

export const modificarDestinoSchema = Joi.object({
    ...destinoBaseSchema,
});
