import Joi from "joi";

const viajeBaseSchema = {
    fechaInicio: Joi.date()
        .iso()  ,
        
        
    fechaFin: Joi.date()
        .iso()  ,
        
    tarifa: Joi.number()
        .precision(2)  // Limita el número de decimales a 2
        .strict()  
};

export const insertarViajeShema = Joi.object({
    ...viajeBaseSchema,
    fechaInicio: viajeBaseSchema.fechaInicio.required(),
    fechaFin: viajeBaseSchema.fechaFin.required(),
    tarifa: viajeBaseSchema.tarifa.required(),

});

export const modificarViajeSchema = Joi.object({
    ...viajeBaseSchema
});
