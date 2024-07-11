"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const paisController_1 = require("../controllers/paisController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', paisController_1.insertarPais);
router.get('/', paisController_1.listarPaises);
router.get('/:id', paisController_1.obtenerPais);
router.put('/:id', paisController_1.modificarPais);
=======
const express_1 = __importDefault(require("express"));
const paisController_1 = require("../controllers/paisController");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Paises
 *   description: Operaciones sobre países
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
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', paisController_1.listarPaises);
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
 *       404:
 *         description: País no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:id', paisController_1.obtenerPais);
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
 *                 example: "España"
 *     responses:
 *       201:
 *         description: País creado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', paisController_1.insertarPais);
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
 *                 example: "Francia"
 *     responses:
 *       200:
 *         description: País actualizado
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: País no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/:id', paisController_1.modificarPais);
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
 *       404:
 *         description: País no encontrado
 *       500:
 *         description: Error interno del servidor
 */
>>>>>>> 5defce0d6e2b28971e3feb4dab058f66c7d23044
router.patch('/:id', paisController_1.eliminarPais);
exports.default = router;
//# sourceMappingURL=paisRoutes.js.map