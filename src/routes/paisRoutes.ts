import express from 'express';
import { eliminarPais, modificarPais, listarPaises, insertarPais, obtenerPais } from '../controllers/paisController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Paises
 *   description: Operaciones sobre países
 */

/**
 * @swagger
 * /api/v1.0/pais:
 *   get:
 *     summary: Obtiene todos los países
 *     tags: [Paises]
 *     responses:
 *       200:
 *         description: Lista de países
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', listarPaises);

/**
 * @swagger
 * /api/v1.0/pais/{id}:
 *   get:
 *     summary: Obtiene un país por ID
 *     tags: [Paises]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del país
 *     responses:
 *       200:
 *         description: Detalles del país
 *       404:
 *         description: País no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:id', obtenerPais);

/**
 * @swagger
 * /api/v1.0/pais:
 *   post:
 *     summary: Crea un nuevo país
 *     tags: [Paises]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "España"
 *     responses:
 *       201:
 *         description: País creado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', insertarPais);

/**
 * @swagger
 * /api/v1.0/pais/{id}:
 *   put:
 *     summary: Actualiza un país existente
 *     tags: [Paises]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del país
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Francia"
 *     responses:
 *       200:
 *         description: País actualizado
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: País no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/:id', modificarPais);

/**
 * @swagger
 * /api/v1.0/pais/{id}:
 *   patch:
 *     summary: Elimina un país
 *     tags: [Paises]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del país
 *     responses:
 *       200:
 *         description: País eliminado
 *       404:
 *         description: País no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.patch('/:id', eliminarPais);

export default router;
