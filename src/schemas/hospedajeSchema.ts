import Joi from "joi";

const hospedajeBaseSchema = {
    nombre: Joi.string()
        .pattern(new RegExp('^[a-zA-Z\\s]+$'))  
        .max(100)
        ,
    precio: Joi.number()
       .precision(2)  // Limita el número de decimales a 2
       .strict(), 
    destino: Joi.object({
        idDestino:Joi.number()
        .positive()
        .integer()
        .required()
    })
};

export const insertarHospedajeSchema = Joi.object({
    ...hospedajeBaseSchema,
    nombre:hospedajeBaseSchema.nombre.required(),
    precio:hospedajeBaseSchema.precio.required(),

});

export const modificarHospedajeSchema = Joi.object({
    ...hospedajeBaseSchema
})