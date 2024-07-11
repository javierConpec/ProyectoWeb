import Joi from "joi";

const paqueteBaseSchema = {
    nombre: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+$'))  // Patrón que permite solo letras sin espacios
        .max(100),
        
    transporte: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+$'))  // Patrón que permite solo letras sin espacios
        .max(100),
        
    precio: Joi.number()
        .precision(2)  // Limita el número de decimales a 2
        .strict()  
};

export const insertarPaqueteSchema = Joi.object({
    ...paqueteBaseSchema,
    nombre: paqueteBaseSchema.nombre.required(),
    transporte: paqueteBaseSchema.transporte.required(),
    precio: paqueteBaseSchema.precio.required(),

});

export const modificarPaqueteSchema = Joi.object({
    ...paqueteBaseSchema
});
