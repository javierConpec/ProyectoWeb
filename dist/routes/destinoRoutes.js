"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const destinoController_1 = require("../controllers/destinoController");
const router = express_1.default.Router();
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
router.get('/', destinoController_1.listarDestinos);
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
router.get('/:id', destinoController_1.obtenerDestino);
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
router.post('/', destinoController_1.insertarDestino);
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
router.put('/:id', destinoController_1.modificarDestino);
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
router.patch('/:id', destinoController_1.eliminarDestino);
exports.default = router;
//# sourceMappingURL=destinoRoutes.js.map