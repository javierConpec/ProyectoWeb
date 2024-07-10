import Joi from 'joi';

const viajeBaseSchema = {
    fechaInicio: Joi.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/), // Acepta fechas en formato YYYY-MM-DD
    fechaFin: Joi.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/),
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
