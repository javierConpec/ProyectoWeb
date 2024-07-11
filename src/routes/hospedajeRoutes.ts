import express from "express";
import {
  eliminarHospedaje,
  insertarHospedaje,
  obtenerHospedaje,
  modifiicarHospedaje,
  listarHospedajes,
} from "../controllers/hospedajeContoller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Hospedajes
 *   description: Operaciones sobre hospedajes
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
 *     Hospedaje:
 *       type: object
 *       required:
 *         - idDestino
 *         - nombre
 *         - precio
 *       properties:
 *         idHospedaje:
 *           type: integer
 *           description: ID del hospedaje
 *         destino:
 *           $ref: '#/components/schemas/Destino'
 *         nombre:
 *           type: string
 *           description: Nombre del hospedaje
 *         precio:
 *           type: number
 *           description: Precio del hospedaje
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
 * /api/v1.0/hospedaje:
 *   get:
 *     summary: Obtiene todos los hospedajes
 *     tags: [Hospedajes]
 *     responses:
 *       200:
 *         description: Lista de hospedajes
 */
router.get("/", listarHospedajes);

/**
 * @swagger
 * /api/v1.0/hospedaje/{id}:
 *   get:
 *     summary: Obtiene un hospedaje por ID
 *     tags: [Hospedajes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del hospedaje
 *     responses:
 *       200:
 *         description: hospedaje obtenido
 *         content:
 *           application/json:
 *       404:
 *         description: Hospedaje no encontrado
 */
router.get("/:id", obtenerHospedaje);

/**
 * @swagger
 * /api/v1.0/hospedaje:
 *   post:
 *     summary: Crea un nuevo hospedaje
 *     tags: [Hospedajes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               destino:
 *                 type: object
 *                 properties:
 *                   idDestino:
 *                     type: integer
 *                     example: 0
 *               nombre:
 *                 type: string
 *                 example: "nuevoHospedaje"
 *               precio:
 *                 type: number
 *                 example: 00.00
 *     responses:
 *       200:
 *         description: Hospedaje creado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", insertarHospedaje);

/**
 * @swagger
 * /api/v1.0/hospedaje/{id}:
 *   put:
 *     summary: Actualiza un hospedaje existente
 *     tags: [Hospedajes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del hospedaje
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               destino:
 *                 type: object
 *                 properties:
 *                   idDestino:
 *                     type: integer
 *                     example: 0
 *               nombre:
 *                 type: string
 *                 example: "nuevoHospedaje"
 *               precio:
 *                 type: number
 *                 example: 00.00
 *     responses:
 *       200:
 *         description: Hospedaje actualizado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", modifiicarHospedaje);

/**
 * @swagger
 * /api/v1.0/hospedaje/{id}:
 *   patch:
 *     summary: Elimina un hospedaje
 *     tags: [Hospedajes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del hospedaje
 *     responses:
 *       200:
 *         description: Hospedaje eliminado
 */
router.patch("/:id", eliminarHospedaje);

export default router;
