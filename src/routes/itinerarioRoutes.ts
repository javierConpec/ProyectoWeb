import express from "express";
import {
  eliminarItinerario,
  modificarItinerario,
  listarItinerarios,
  insertarItinerario,
  obtenerItinerario,
} from "../controllers/itinerarioController";

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
 *           format: time
 *           description: Hora de inicio del itinerario
 *           example: "08:00:00"
 *         horaFin:
 *           type: string
 *           format: time
 *           description: Hora de fin del itinerario
 *           example: "17:00:00"
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
 */
router.get("/", listarItinerarios);

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
 *         description: Itinerario obtenido
 *       404:
 *         description: Itinerario no encontrado
 */
router.get("/:id", obtenerItinerario);

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
 *               viaje:
 *                 type: object
 *                 properties:
 *                   idViaje:
 *                     type: integer
 *                     example: 0
 *               dia:
 *                 type: string
 *                 example: "lunes"
 *               horaInicio:
 *                 type: string
 *                 format: time
 *                 example: "08:00:00"
 *               horaFin:
 *                 type: string
 *                 format: time
 *                 example: "17:00:00"
 *               actividad:
 *                 type: string
 *                 example: "actividad"
 *               descripcion:
 *                 type: string
 *                 example: "descripcion"
 *     responses:
 *       200:
 *         description: Itinerario creado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", insertarItinerario);

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
 *               viaje:
 *                 type: object
 *                 properties:
 *                   idViaje:
 *                     type: integer
 *                     example: 0
 *               dia:
 *                 type: string
 *                 example: "lunes"
 *               horaInicio:
 *                 type: string
 *                 format: time
 *                 example: "08:00:00"
 *               horaFin:
 *                 type: string
 *                 format: time
 *                 example: "17:00:00"
 *               actividad:
 *                 type: string
 *                 example: "actividad"
 *               descripcion:
 *                 type: string
 *                 example: "descripcion"
 *     responses:
 *       200:
 *         description: Itinerario actualizado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", modificarItinerario);

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
 */
router.delete("/:id", eliminarItinerario);

export default router;
