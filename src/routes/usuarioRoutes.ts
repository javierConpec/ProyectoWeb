import express from "express";
import {
  eliminarUsuario,
  insertarUsuario,
  listarUsuarios,
  modificarUsuario,
  obtenerUsuario,
} from "../controllers/usuarioController";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operaciones sobre usuarios
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
 *     Usuario:
 *       type: object
 *       properties:
 *         idUsuario:
 *           type: integer
 *           description: ID del usuario
 *         rol:
 *           $ref: '#/components/schemas/Rol'
 *         nombres:
 *           type: string
 *           description: Nombres del usuario
 *         apellidoPaterno:
 *           type: string
 *           description: Apellido paterno del usuario
 *         apellidoMaterno:
 *           type: string
 *           description: Apellido materno del usuario
 *         username:
 *           type: string
 *           description: Nombre de usuario
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico del usuario
 *         clave:
 *           type: string
 *           format: password
 *           description: Clave de acceso del usuario
 *         telefono:
 *           type: string
 *           description: Teléfono del usuario
 *         direccion:
 *           type: string
 *           description: Dirección del usuario
 *         sexo:
 *           type: string
 *           description: Género del usuario
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
 * /api/v1.0/usuario:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de Usuarios
 */
router.get("/", listarUsuarios);

/**
 * @swagger
 * /api/v1.0/usuario/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: País creado
 *       404:
 *         description:Usuario no obtenido
 */
router.get("/:id", obtenerUsuario);

/**
 * @swagger
 * /api/v1.0/usuario:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rol:
 *                 type: object
 *                 properties:
 *                   idRol:
 *                     type: integer
 *                     example: 0
 *               nombres:
 *                 type: string
 *                 example: "nombre"
 *               apellidoPaterno:
 *                 type: string
 *                 example: "apellidoP"
 *               apellidoMaterno:
 *                 type: string
 *                 example: "apellidoM"
 *               username:
 *                 type: string
 *                 example: "username"
 *               email:
 *                 type: string
 *                 example: "email"
 *               clave:
 *                 type: string
 *                 example: "clave"
 *               telefono:
 *                 type: string
 *                 example: "telefono"
 *               direccion:
 *                 type: string
 *                 example: "direccion"
 *               sexo:
 *                 type: string
 *                 example: "sexo"
 *     responses:
 *       200:
 *         description: Usuario creado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", insertarUsuario);

/**
 * @swagger
 * /api/v1.0/usuario/{id}:
 *   put:
 *     summary: Actualiza un usuario existente
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rol:
 *                 type: object
 *                 properties:
 *                   idRol:
 *                     type: integer
 *                     example: 0
 *               nombres:
 *                 type: string
 *                 example: "nombre"
 *               apellidoPaterno:
 *                 type: string
 *                 example: "apellidoP"
 *               apellidoMaterno:
 *                 type: string
 *                 example: "apellidoM"
 *               username:
 *                 type: string
 *                 example: "username"
 *               email:
 *                 type: string
 *                 example: "email"
 *               clave:
 *                 type: string
 *                 example: "clave"
 *               telefono:
 *                 type: string
 *                 example: "telefono"
 *               direccion:
 *                 type: string
 *                 example: "direccion"
 *               sexo:
 *                 type: string
 *                 example: "sexo"
  *     responses:
 *       200:
 *         description: Usuario modificado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", modificarUsuario);

/**
 * @swagger
 * /api/v1.0/usuario/{id}:
 *   patch:
 *     summary: Elimina un usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */
router.patch("/:id", eliminarUsuario);

export default router;
