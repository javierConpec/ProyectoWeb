import express from 'express';
import { eliminarDestino, insertarDestino, listarDestinos, modificarDestino, obtenerDestino } from '../controllers/destinoController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Destinos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DestinoInput:
 *       type: object
 *       properties:
 *         idPais:
 *           type: number
 *         nombre:
 *           type: string
 *       required:
 *         - idPais
 *         - nombre
 */

/**
 * @swagger
 * /api/v1.0/destino:
 *   get:
 *     summary: Obtiene todos los destinos
 *     tags: [Destinos]
 *     responses:
 *       200:
 *         description: Lista de destinos
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', listarDestinos);

/**
 * @swagger
 * /api/v1.0/destino/{id}:
 *   get:
 *     summary: Obtiene un destino por ID
 *     tags: [Destinos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del destino
 *     responses:
 *       200:
 *         description: Detalles del destino
 *       404:
 *         description: Destino no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:id', obtenerDestino);

/**
 * @swagger
 * /api/v1.0/destino:
 *   post:
 *     summary: Crea un nuevo destino
 *     tags: [Destinos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DestinoInput'
 *     responses:
 *       201:
 *         description: Destino creado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', insertarDestino);

/**
 * @swagger
 * /api/v1.0/destino/{id}:
 *   put:
 *     summary: Actualiza un destino existente
 *     tags: [Destinos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del destino
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DestinoInput'
 *     responses:
 *       200:
 *         description: Destino actualizado
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Destino no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/:id', modificarDestino);

/**
 * @swagger
 * /api/v1.0/destino/{id}:
 *   patch:
 *     summary: Elimina un destino
 *     tags: [Destinos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del destino
 *     responses:
 *       200:
 *         description: Destino eliminado
 *       404:
 *         description: Destino no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.patch('/:id', eliminarDestino);

export default router;
