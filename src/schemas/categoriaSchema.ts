import Joi from "joi";

const categoriaBaseSchema = {
    nombre: Joi.string()
        .pattern(new RegExp('^[a-zA-Z\\s]+$'))
        .max(100)
}
export const insertarCategoriaSchema = Joi.object({
    ...categoriaBaseSchema,
    nombre: categoriaBaseSchema.nombre.
        required(),

});

export const modificarCategoriaSchema = Joi.object({
    ...categoriaBaseSchema
});