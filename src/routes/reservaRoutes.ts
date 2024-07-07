import express from 'express';
import { eliminarReserva, modificarReserva, listarReservas, insertarReserva, obtenerResrva } from '../controllers/reservaController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Operaciones sobre reservas
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
 *     Reserva:
 *       type: object
 *       required:
 *         - usuario
 *         - viaje
 *         - numeroPersonas
 *         - metodoPago
 *         - pagoTotal
 *         - estadoAuditoria
 *         - fechaCreacion
 *         - fechaModificacion
 *       properties:
 *         idReserva:
 *           type: integer
 *           description: ID de la reserva
 *         usuario:
 *           $ref: '#/components/schemas/Usuario'
 *         viaje:
 *           $ref: '#/components/schemas/Viaje'
 *         numeroPersonas:
 *           type: integer
 *           description: Número de personas en la reserva
 *         metodoPago:
 *           type: string
 *           description: Método de pago utilizado
 *         pagoTotal:
 *           type: number
 *           description: Monto total pagado
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
 * /api/v1.0/reserva:
 *   get:
 *     summary: Obtiene todas las reservas
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 */
router.get('/', listarReservas);

/**
 * @swagger
 * /api/v1.0/reserva/{id}:
 *   get:
 *     summary: Obtiene una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Detalles de la reserva
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/:id', obtenerResrva);

/**
 * @swagger
 * /api/v1.0/reserva:
 *   post:
 *     summary: Crea una nueva reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUsuario:
 *                 type: integer
 *                 example: 0
 *               idViaje:
 *                 type: integer
 *                 example: 0
 *               numeroPersonas:
 *                 type: integer
 *                 example: 1
 *               metodoPago:
 *                 type: string
 *                 example: "metodoPago"
 *               pagoTotal:
 *                 type: number
 *                 example: 00.00
 *     responses:
 *       201:
 *         description: Reserva creada
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
router.post('/', insertarReserva);

/**
 * @swagger
 * /api/v1.0/reserva/{id}:
 *   put:
 *     summary: Actualiza una reserva existente
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUsuario:
 *                 type: integer
 *                 example: 0
 *               idViaje:
 *                 type: integer
 *                 example: 0
 *               numeroPersonas:
 *                 type: integer
 *                 example: 1
 *               metodoPago:
 *                 type: string
 *                 example: "metodoPago"
 *               pagoTotal:
 *                 type: number
 *                 example: 00.00
 *     responses:
 *       200:
 *         description: Reserva actualizada
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
 *         description: Reserva no encontrada
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
router.put('/:id', modificarReserva);

/**
 * @swagger
 * /api/v1.0/reserva/{id}:
 *   patch:
 *     summary: Elimina una Reserva
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la Reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: Reserva no encontrada
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
router.delete('/:id', eliminarReserva);

export default router;
