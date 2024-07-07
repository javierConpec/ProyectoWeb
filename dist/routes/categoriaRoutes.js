"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoriaController_1 = require("../controllers/categoriaController");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Categorías
 */
/**
 * @swagger
 * /api/v1.0/categoria:
 *   get:
 *     summary: Obtiene todas las categorías
 *     tags: [Categorías]
 *     responses:
 *       200:
 *         description: Lista de categorías
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', categoriaController_1.listarCategorias);
/**
 * @swagger
 * /api/v1.0/categoria/{id}:
 *   get:
 *     summary: Obtiene una categoría por ID
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Detalles de la categoría
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:id', categoriaController_1.obtenerCategoria);
/**
 * @swagger
 * /api/v1.0/categoria:
 *   post:
 *     summary: Crea una nueva categoría
 *     tags: [Categorías]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría creada
 *       400:
 *         description: Error en los datos de entrada
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', categoriaController_1.insertarCategoria);
/**
 * @swagger
 * /api/v1.0/categoria/{id}:
 *   put:
 *     summary: Actualiza una categoría existente
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
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
 *     responses:
 *       200:
 *         description: Categoría actualizada
 *       400:
 *         description: Error en los datos de entrada
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put('/:id', categoriaController_1.modificarCategoria);
/**
 * @swagger
 * /api/v1.0/categoria/{id}:
 *   patch:
 *     summary: Elimina una categoría
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría eliminada
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.patch('/:id', categoriaController_1.eliminarCategoria);
exports.default = router;
//# sourceMappingURL=categoriaRoutes.js.map