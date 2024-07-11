import Joi from "joi";

const hospedajeBaseSchema = {
    nombres: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+$'))  
        .max(100)
        ,
    precio: Joi.number()
       .precision(2)  // Limita el número de decimales a 2
       .strict() 
};

export const insertarHospedajeSchema = Joi.object({
    ...hospedajeBaseSchema,
    nombres:hospedajeBaseSchema.nombres.required(),
    precio:hospedajeBaseSchema.precio.required(),

});

export const modificarHospedajeSchema = Joi.object({
    ...hospedajeBaseSchema
})