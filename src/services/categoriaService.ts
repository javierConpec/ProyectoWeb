import { PrismaClient, categorias } from "@prisma/client";
import { ICategoria } from "../models/Categoria";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK, RESPONSE_DELETE_OK } from "../shared/constants";
import { fromPrismaCategoria, toPrismaCategoria } from "../mappers/categoriaMapper";

const prisma = new PrismaClient();

export const insertarCategoria = async (categoria: ICategoria) => {
    await prisma.categorias.create({
        data: toPrismaCategoria(categoria)
    });
    return RESPONSE_INSERT_OK;
}

export const listarCategorias = async () => {
    const categorias: categorias[] = await prisma.categorias.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return categorias.map((categoria: categorias) => fromPrismaCategoria(categoria));
}

export const obtenerCategoria = async (idCategoria: number) => {
    console.log('categoriaService::obtenerCategoria', idCategoria);

    const categoria: categorias = await prisma.categorias.findUnique({
        where: {
            id_categoria: idCategoria,
            estado_auditoria: '1'
        }
    });
    return fromPrismaCategoria(categoria)
}

export const modificarCategoria = async (idCategoria: number, categoria: ICategoria) => {
    console.log('categoriaService::modificarCategoria', idCategoria, categoria);

    await prisma.categorias.update({
        data: toPrismaCategoria(categoria),
        where: {
            id_categoria: idCategoria
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarCategoria = async (idCategoria: number) => {
    console.log('categoriaService::eliminarCategoria', idCategoria);

    await prisma.categorias.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_categoria: idCategoria
        }
    })
    return RESPONSE_DELETE_OK;
}
