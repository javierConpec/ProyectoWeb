import Joi from "joi";

const rolBaseSchema = {
    nombre: Joi.string()
        .pattern(new RegExp('^[a-zA-Z\\s]+$'))  
        .max(100)
}
export const insertarRolSchema = Joi.object({
    ...rolBaseSchema,
    nombre: rolBaseSchema.nombre.required(),

});

export const modificarRolSchema = Joi.object({
    ...rolBaseSchema
});