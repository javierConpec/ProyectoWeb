import express from 'express';
import { eliminarViaje, modificarViaje, listarViaje, insertarViaje, obtenerViaje } from '../controllers/viajeContoller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Viajes
 *   description: Operaciones sobre viajes
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
 *     Viaje:
 *       type: object
 *       required:
 *         - categoria
 *         - destino
 *         - hospedaje
 *         - paquete
 *         - fechaInicio
 *         - fechaFin
 *         - tarifa
 *       properties:
 *         idViaje:
 *           type: integer
 *           description: ID del viaje
 *         categoria:
 *           $ref: '#/components/schemas/Categoria'
 *         destino:
 *           $ref: '#/components/schemas/Destino'
 *         hospedaje:
 *           $ref: '#/components/schemas/Hospedaje'
 *         paquete:
 *           $ref: '#/components/schemas/Paquete'
 *         fechaInicio:
 *           type: string
 *           format: date-time
 *           description: Fecha de inicio del viaje
 *         fechaFin:
 *           type: string
 *           format: date-time
 *           description: Fecha de fin del viaje
 *         tarifa:
 *           type: number
 *           description: Tarifa del viaje
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
 * /api/v1.0/viaje:
 *   get:
 *     summary: Obtiene todos los viajes
 *     tags: [Viajes]
 *     responses:
 *       200:
 *         description: Lista de viajes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 */
router.get('/', listarViaje);

/**
 * @swagger
 * /api/v1.0/viaje/{id}:
 *   get:
 *     summary: Obtiene un viaje por ID
 *     tags: [Viajes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del viaje
 *     responses:
 *       200:
 *         description: Detalles del viaje
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: Viaje no encontrado
 */
router.get('/:id', obtenerViaje);

/**
 * @swagger
 * /api/v1.0/viaje:
 *   post:
 *     summary: Crea un nuevo viaje
 *     tags: [Viajes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idCategoria:
 *                 type: integer
 *                 example: "0"
 *               idDestino:
 *                 type: integer
 *                 example: "0"
 *               idHospedaje:
 *                 type: string
 *                 example: "paquete"
 *               idPaquete:
 *                 type: string
 *                 example: "paquete"
 *               fechaInicio:
 *                 type: date
 *                 example: "10/09/1002"
 *               fechaFin:
 *                 type: date
 *                 example: "10/10/1002"
 *               tarifa:
 *                 type: number
 *                 example: "00.00"
 *     responses:
 *       201:
 *         description: Viaje creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       400:
 *         description: Datos inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 */
router.post('/', insertarViaje);

/**
 * @swagger
 * /api/v1.0/viaje/{id}:
 *   put:
 *     summary: Actualiza un viaje existente
 *     tags: [Viajes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del viaje
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idCategoria:
 *                 type: integer
 *                 example: "0"
 *               idDestino:
 *                 type: integer
 *                 example: "0"
 *               idHospedaje:
 *                 type: string
 *                 example: "paquete"
 *               idPaquete:
 *                 type: string
 *                 example: "paquete"
 *               fechaInicio:
 *                 type: date
 *                 example: "10/09/1002"
 *               fechaFin:
 *                 type: date
 *                 example: "10/10/1002"
 *               tarifa:
 *                 type: number
 *                 example: "00.00"
 *     responses:
 *       200:
 *         description: Viaje actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       400:
 *         description: Datos inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: Viaje no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 */
router.put('/:id', modificarViaje);

/**
 * @swagger
 * /api/v1.0/viaje/{id}:
 *   patch:
 *     summary: Elimina un viaje
 *     tags: [Viajes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del viaje
 *     responses:
 *       200:
 *         description: Viaje eliminado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: Viaje no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 */
router.patch('/:id', eliminarViaje);

export default router;