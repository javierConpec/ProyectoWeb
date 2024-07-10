import Joi from "joi";

const reservaBaseSchema = {
    numeroPersonas: Joi.number()
    .strict(),
        
    metodoPago: Joi.string()
        .pattern(new RegExp('^[a-zA-Z\\s]+$'))  
        .max(100),
        
    pagoTotal: Joi.number()
        .strict(),
    usuario:Joi.object({
        idUsuario:Joi.number()
        .integer()
        .positive()
        .required()
    }),
    viaje:Joi.object({
        idViaje:Joi.number()
        .integer()
        .positive()
        .required()
    })
        

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
