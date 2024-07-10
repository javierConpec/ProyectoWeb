import Joi from "joi";

const itinerarioBaseSchema = {
    dia: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]+$'))  // Permite letras y espacios
        .max(100),
        horaInicio: Joi.string()
        .pattern(new RegExp('^(1[012]|[1-9]) (am|pm)$'))  // Permite formatos como "9 am", "10 pm"
        .max(100),

    horaFin: Joi.string()
        .pattern(new RegExp('^(1[012]|[1-9]) (am|pm)$'))  // Permite formatos como "9 am", "10 pm"
        .max(100),
    actividad: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]+$'))  // Permite letras y espacios
        .max(100),
    descripcion: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]+$'))  // Permite letras y espacios
        .max(1024),
    viaje: Joi.object({
        idViaje:Joi.number()
        .integer()
        .positive()
        .required(),

    })
};

export const insertarItinerarioSchema = Joi.object({
    ...itinerarioBaseSchema,
    dia: itinerarioBaseSchema.dia.required(),
    horaInicio: itinerarioBaseSchema.horaInicio.required(),
    horaFin: itinerarioBaseSchema.horaFin.required(),
    actividad: itinerarioBaseSchema.actividad.required(),
    descripcion: itinerarioBaseSchema.descripcion.required()
});

export const modificarItinerarioSchema = Joi.object(itinerarioBaseSchema);
