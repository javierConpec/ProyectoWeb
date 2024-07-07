import Joi from "joi";

const itinerarioBaseSchema = {
    dia: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]+$'))  // Permite letras y espacios
        .max(100),
        
    horaInicio: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9 ]+$'))  // Permite letras, números y espacios
        .max(100),
        
    horaFin: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9 ]+$'))  // Permite letras, números y espacios
        .max(100),

    actividad: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]+$'))  // Permite letras y espacios
        .max(100),

    descripcion: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]+$'))  // Permite letras y espacios
        .max(1024)
};

export const insertarItinerarioSchema = Joi.object({
    ...itinerarioBaseSchema,
    dia: itinerarioBaseSchema.dia.required(),
    horaInicio: itinerarioBaseSchema.horaInicio.required(),
    horaFin: itinerarioBaseSchema.horaFin.required(),
    actividad: itinerarioBaseSchema.actividad.required(),
    descripcion: itinerarioBaseSchema.descripcion.required()
});

export const modificarItinerarioSchema = Joi.object({
    ...itinerarioBaseSchema
});
