import express from "express";
import {
  eliminarPaquete,
  modificarPaquete,
  listarPaquetes,
  insertarPaquete,
  obtenerPaquete,
} from "../controllers/paqueteController";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Paquetes
 *   description: Operaciones sobre paquetes
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
 *       properties:
 *         idCategoria:
 *           type: integer
 *           example: 0
 *           description: ID de la categoría del paquete
 *     Hospedaje:
 *       type: object
 *       properties:
 *         idHospedaje:
 *           type: integer
 *           example: 0
 *           description: ID del hospedaje del paquete
 *     Paquete:
 *       type: object
 *       required:
 *         - categoria
 *         - hospedaje
 *         - nombre
 *         - transporte
 *         - precio
 *       properties:
 *         idPaquete:
 *           type: integer
 *           description: ID del paquete
 *         categoria:
 *           $ref: '#/components/schemas/Categoria'
 *         hospedaje:
 *           $ref: '#/components/schemas/Hospedaje'
 *         nombre:
 *           type: string
 *           description: Nombre del paquete
 *         transporte:
 *           type: string
 *           description: Tipo de transporte del paquete
 *         precio:
 *           type: number
 *           description: Precio del paquete
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
 * /api/v1.0/paquete:
 *   get:
 *     summary: Obtiene todos los paquetes
 *     tags: [Paquetes]
 *     responses:
 *       200:
 *         description: Lista de paquetes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 */
router.get("/", listarPaquetes);

/**
 * @swagger
 * /api/v1.0/paquete/{id}:
 *   get:
 *     summary: Obtiene un paquete por ID
 *     tags: [Paquetes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del paquete
 *     responses:
 *       200:
 *         description: Detalles del paquete
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: Paquete no encontrado
 */
router.get("/:id", obtenerPaquete);

/**
 * @swagger
 * /api/v1.0/paquete:
 *   post:
 *     summary: Crea un nuevo paquete
 *     tags: [Paquetes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoria:
 *                 type: object
 *                 properties:
 *                   idCategoria:
 *                     type: integer
 *                     example: 0
 *               hospedaje:
 *                 type: object
 *                 properties:
 *                   idHospedaje:
 *                     type: integer
 *                     example: 0
 *               nombre:
 *                 type: string
 *                 example: "paquete"
 *               transporte:
 *                 type: string
 *                 example: "transporte"
 *               precio:
 *                 type: number
 *                 example: 00.00
 *     responses:
 *       201:
 *         description: Paquete creado
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
router.post("/", insertarPaquete);

/**
 * @swagger
 * /api/v1.0/paquete/{id}:
 *   put:
 *     summary: Actualiza un paquete existente
 *     tags: [Paquetes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del paquete
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoria:
 *                 type: object
 *                 properties:
 *                   idCategoria:
 *                     type: integer
 *                     example: 0
 *               hospedaje:
 *                 type: object
 *                 properties:
 *                   idHospedaje:
 *                     type: integer
 *                     example: 0
 *               nombre:
 *                 type: string
 *                 example: "paquete"
 *               transporte:
 *                 type: string
 *                 example: "transporte"
 *               precio:
 *                 type: number
 *                 example: 00.00
 *     responses:
 *       200:
 *         description: Paquete actualizado
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
 *         description: Paquete no encontrado
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
router.put("/:id", modificarPaquete);

/**
 * @swagger
 * /api/v1.0/paquete/{id}:
 *   patch:
 *     summary: Elimina un paquete
 *     tags: [Paquetes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del paquete
 *     responses:
 *       200:
 *         description: Paquete eliminado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: Paquete no encontrado
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
router.delete("/:id", eliminarPaquete);

export default router;
