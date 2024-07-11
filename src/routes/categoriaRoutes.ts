import {
  eliminarCategoria,
  modificarCategoria,
  listarCategorias,
  insertarCategoria,
  obtenerCategoria,
} from "../controllers/categoriaController";
import express from "express";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: Operaciones relacionadas con categorías
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ResponseModel:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indica si la operación fue exitosa
 *         message:
 *           type: string
 *           description: Mensaje de respuesta
 *         status:
 *           type: integer
 *           description: Código de estado HTTP
 *         data:
 *           type: object
 *           description: Datos de respuesta
 *     Categoria:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         idCategoria:
 *           type: integer
 *           description: ID de la categoría
 *         nombre:
 *           type: string
 *           description: Nombre de la categoría
 *         estadoAuditoria:
 *           type: string
 *           description: Estado de auditoría
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación
 *         fechaModificacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de modificación
 */

/**
 * @swagger
 * /api/v1.0/categoria:
 *   get:
 *     summary: Obtiene todas las categorías
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Categorias Listados
 *  
 */
router.get("/", listarCategorias);

/**
 * @swagger
 * /api/v1.0/categoria/{id}:
 *   get:
 *     summary: Obtiene una categoría por ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoria listada
 */
router.get("/:id", obtenerCategoria);

/**
 * @swagger
 * /api/v1.0/categoria:
 *   post:
 *     summary: Crea una nueva categoría
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "newcategoria"
 *     responses:
 *       200:
 *         description: Categoria creado

 *       400:
 *         description: Datos inválidos

 *       500:
 *         description: Error interno del servidor
 */
router.post("/", insertarCategoria);

/**
 * @swagger
 * /api/v1.0/categoria/{id}:
 *   put:
 *     summary: Actualiza una categoría existente
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "categoria"
 *     responses:
 *       200:
 *         description: Categoria modificada

 *       400:
 *         description: Datos inválidos

 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", modificarCategoria);

/**
 * @swagger
 * /api/v1.0/categoria/{id}:
 *   patch:
 *     summary: Elimina una categoría existente
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoria eliminada
 */
router.patch("/:id", eliminarCategoria);

export default router;
