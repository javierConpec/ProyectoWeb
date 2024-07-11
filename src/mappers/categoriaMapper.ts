import { categorias } from "@prisma/client";
import { ICategoria } from "../models/Categoria";

export const fromPrismaCategoria = (categoria: categorias): any=>({
    idCategoria:categoria.id_categoria,
    nombre: categoria.nombre,
<<<<<<< HEAD
    descripcion: categoria.descripcion,
=======
>>>>>>> 5defce0d6e2b28971e3feb4dab058f66c7d23044
})

export const toPrismaCategoria = (categoria: ICategoria):any=> ({
    nombre: categoria.nombre,
    descripcion: categoria.descripcion,
})