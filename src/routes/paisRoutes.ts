import express from "express";
import {
  eliminarPais,
  modificarPais,
  listarPaises,
  insertarPais,
  obtenerPais,
} from "../controllers/paisController";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Paises
 *   description: Operaciones sobre países
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
 *     Pais:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         idPais:
 *           type: integer
 *           description: ID del país
 *         nombre:
 *           type: string
 *           description: Nombre del país
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
 * /api/v1.0/pais:
 *   get:
 *     summary: Obtiene todos los países
 *     tags: [Paises]
 *     responses:
 *       200:
 *         description: Lista de países
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 */
router.get("/", listarPaises);

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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: País no encontrado
 */
router.get("/:id", obtenerPais);

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
 *                 example: "newpais"
 *     responses:
 *       201:
 *         description: País creado
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
router.post("/", insertarPais);

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
 *                 example: "categoria"
 *     responses:
 *       200:
 *         description: País actualizado
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
 *         description: País no encontrado
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
router.put("/:id", modificarPais);

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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseModel'
 *       404:
 *         description: País no encontrado
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
router.patch("/:id", eliminarPais);

export default router;
