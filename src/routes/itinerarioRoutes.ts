import express from 'express';
import { eliminarItinerario, modificarItinerario, listarItinerarios, insertarItinerario, obtenerItinerario } from '../controllers/itinerarioController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Itinerarios
 *   description: Operaciones sobre itinerarios
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
 *     Itinerario:
 *       type: object
 *       required:
 *         - viaje
 *         - dia
 *         - horaInicio
 *         - horaFin
 *         - actividad
 *         - descripcion
 *       properties:
 *         idItinerario:
 *           type: integer
 *           description: ID del itinerario
 *         viaje:
 *           $ref: '#/components/schemas/Viaje'
 *         dia:
 *           type: string
 *           description: Día del itinerario
 *         horaInicio:
 *           type: string
 *           description: Hora de inicio del itinerario
 *         horaFin:
 *           type: string
 *           description: Hora de fin del itinerario
 *         actividad:
 *           type: string
 *           description: Actividad del itinerario
 *         descripcion:
 *           type: string
 *           description: Descripción del itinerario
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
 * /api/v1.0/itinerario:
 *   get:
 *     summary: Obtiene todos los itinerarios
 *     tags: [Itinerarios]
 *     responses:
 *       200:
 *         description: Lista de itinerarios
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 */
router.get('/', listarItinerarios);

/**
 * @swagger
 * /api/v1.0/itinerario/{id}:
 *   get:
 *     summary: Obtiene un itinerario por ID
 *     tags: [Itinerarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del itinerario
 *     responses:
 *       200:
 *         description: Detalles del itinerario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: Itinerario no encontrado
 */
router.get('/:id', obtenerItinerario);

/**
 * @swagger
 * /api/v1.0/itinerario:
 *   post:
 *     summary: Crea un nuevo itinerario
 *     tags: [Itinerarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idViaje:
 *                 type: integer
 *                 example: "0"
 *               dia:
 *                 type: string
 *                 example: "dia"
 *               horaInicio:
 *                 type: string
 *                 example: "horaInicio"
 *               horaFin:
 *                 type: string
 *                 example: "horaFin"
 *               actividad:
 *                 type: string
 *                 example: "actividad"
 *               dscripcion:
 *                 type: string
 *                 example: "dscripcion"
 *     responses:
 *       201:
 *         description: Itinerario creado
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
router.post('/', insertarItinerario);

/**
 * @swagger
 * /api/v1.0/itinerario/{id}:
 *   put:
 *     summary: Actualiza un itinerario existente
 *     tags: [Itinerarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del itinerario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idViaje:
 *                 type: integer
 *                 example: "0"
 *               dia:
 *                 type: string
 *                 example: "dia"
 *               horaInicio:
 *                 type: string
 *                 example: "horaInicio"
 *               horaFin:
 *                 type: string
 *                 example: "horaFin"
 *               actividad:
 *                 type: string
 *                 example: "actividad"
 *               dscripcion:
 *                 type: string
 *                 example: "dscripcion"
 *     responses:
 *       200:
 *         description: Itinerario actualizado
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
 *         description: Itinerario no encontrado
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
router.put('/:id', modificarItinerario);

/**
 * @swagger
 * /api/v1.0/itinerario/{id}:
 *   patch:
 *     summary: Elimina un itinerario
 *     tags: [Itinerarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del itinerario
 *     responses:
 *       200:
 *         description: Itinerario eliminado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: Itinerario no encontrado
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
router.patch('/:id', eliminarItinerario);

export default router;
