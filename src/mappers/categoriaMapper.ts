import { categorias } from "@prisma/client";
import { ICategoria } from "../models/Categoria";

export const fromPrismaCategoria = (categoria: categorias): any=>({
    idCategoria:1,
    nombre: categoria.nombre,
    descripcion: categoria.descripcion,
})

export const toPrismaCategoria = (categoria: ICategoria):any=> ({
    nombre: categoria.nombre,
    descripcion: categoria.descripcion,
})