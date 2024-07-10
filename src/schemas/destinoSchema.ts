import Joi from "joi";

const destinoBaseSchema = {
    nombre: Joi.string()
        .pattern(new RegExp('^[a-zA-Z\\s]+$'))  // Permite solo letras y espacios
        .max(100),
    pais: Joi.object({
        idPais: Joi.number()
            .integer()
            .positive()
            .required()  // Asegúrate de que el idPais sea requerido y positivo
    }).required()  // Requerir el objeto pais
};

export const insertarDestinoSchema = Joi.object({
    ...destinoBaseSchema,
    nombre: destinoBaseSchema.nombre.required()
});

export const modificarDestinoSchema = Joi.object({
    ...destinoBaseSchema
});
