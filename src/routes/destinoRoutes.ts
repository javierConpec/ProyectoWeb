import express from "express";
import {
  eliminarDestino,
  insertarDestino,
  listarDestinos,
  modificarDestino,
  obtenerDestino,
} from "../controllers/destinoController";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Destinos
 *   description: Operaciones sobre destinos
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
 *     Destino:
 *       type: object
 *       required:
 *         - idPais
 *         - nombre
 *       properties:
 *         idDestino:
 *           type: integer
 *           description: ID del destino
 *         Pais:
 *               $ref: '#/components/schemas/Pais'
 *         nombre:
 *           type: string
 *           description: Nombre del destino
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
 * /api/v1.0/destino:
 *   get:
 *     summary: Obtiene todos los destinos
 *     tags: [Destinos]
 *     responses:
 *       200:
 *         description: Lista de destinos
 */
router.get("/", listarDestinos);

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
 *         description: Destino obtenido
 */
router.get("/:id", obtenerDestino);

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
 *             type: object
 *             properties:
 *               pais:
 *                 type: object
 *                 properties:
 *                   idPais:
 *                     type: integer
 *                     example: 2
 *               nombre:
 *                 type: string
 *                 example: "ola"
 *     responses:
 *       200:
 *         description: Destino creado
 *         content:
 *           application/json:
 *             
 *       400:
 *         description: Datos inválidos
 *         content:
 *           application/json:
 *             
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             
 */
router.post("/", insertarDestino);

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
 *             type: object
 *             properties:
 *               pais:
 *                 type: object
 *                 properties:
 *                   idPais:
 *                     type: integer
 *                     example: 2
 *               nombre:
 *                 type: string
 *                 example: "ola"
 *     responses:
 *       200:
 *         description: Destino actualizado
 *       400:
 *         description: Datos inválidos
 *         content:
 *           application/json:
 *             
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             
 */
router.put("/:id", modificarDestino);

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
 *         content:
 *           application/json:
        
 */
router.patch("/:id", eliminarDestino);

export default router;
