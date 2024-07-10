import Joi from 'joi';

const viajeBaseSchema = {
    fechaInicio: Joi.date()
    .iso(),
    fechaFin: Joi.date()
    .iso(),
    tarifa: Joi.number()
    .precision(2)
    .strict(),
    destino: Joi.object({
        idDestino: Joi.number()
        .integer()
        .positive()
        .required()
    }),
    paquete: Joi.object({
        idPaquete: Joi.number()
        .integer()
        .positive()
        .required()
    })
};

export const insertarViajeShema = Joi.object({
    ...viajeBaseSchema,
    fechaInicio:viajeBaseSchema.fechaInicio.required(),
    fechaFin:viajeBaseSchema.fechaFin.required(),
    tarifa:viajeBaseSchema.tarifa.required(),
});
export const modificarViajeSchema =Joi.object({
    ...viajeBaseSchema
})
