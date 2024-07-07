import Joi from "joi";

const reservaBaseSchema = {
    numeroPersonas: Joi.number()
    .strict(),
        
    metodoPago: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+$'))  // Patrón que permite solo letras sin espacios
        .max(100),
        
    pagoTotal: Joi.number()
        .strict(),
        

};

export const insertarReservaSchema = Joi.object({
    ...reservaBaseSchema,
    numeroPersonas: reservaBaseSchema.numeroPersonas.required(),
    metodoPago: reservaBaseSchema.metodoPago.required(),
    pagoTotal: reservaBaseSchema.pagoTotal.required(),

});

export const modificarReservaSchema = Joi.object({
    ...reservaBaseSchema
});
