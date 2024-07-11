"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rolController_1 = require("../controllers/rolController");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Operaciones sobre roles
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
 *     Rol:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         idRol:
 *           type: integer
 *           description: ID del rol
 *         nombre:
 *           type: string
 *           description: Nombre del rol
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
 * /api/v1.0/rol:
 *   get:
 *     summary: Obtiene todos los roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Lista de roles
 */
router.get("/", rolController_1.listarRoles);
/**
 * @swagger
 * /api/v1.0/rol/{id}:
 *   get:
 *     summary: Obtiene un rol por ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del rol
 *     responses:
 *       200:
 *         description: País creado
 *       404:
 *         description: Rol no encontrado
 */
router.get("/:id", rolController_1.obtenerRol);
/**
 * @swagger
 * /api/v1.0/rol:
 *   post:
 *     summary: Crea un nuevo rol
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "newrol"
 *     responses:
 *       200:
 *         description: Rol creado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", rolController_1.insertarRol);
/**
 * @swagger
 * /api/v1.0/rol/{id}:
 *   put:
 *     summary: Actualiza un rol existente
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del rol
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "rol"
 *     responses:
 *       200:
 *         description: Rol modificado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", rolController_1.modificarRol);
/**
 * @swagger
 * /api/v1.0/rol/{id}:
 *   patch:
 *     summary: Elimina un rol
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del rol
 *     responses:
 *       200:
 *         description: Rol eliminada
 */
router.patch("/:id", rolController_1.eliminarRol);
exports.default = router;
//# sourceMappingURL=rolRoutes.js.map