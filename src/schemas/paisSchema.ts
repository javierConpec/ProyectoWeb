import Joi from "joi";

const paisBaseSchema = {
    nombre: Joi.string()
        .pattern(new RegExp('^[a-zA-Z\\s]+$'))  
        .max(100)
}
export const insertarPaisSchema = Joi.object({
    ...paisBaseSchema,
    nombre: paisBaseSchema.nombre.required(),

});

export const modificarPaisSchema = Joi.object({
    ...paisBaseSchema
});