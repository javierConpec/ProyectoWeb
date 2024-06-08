import { eliminarRol, insertarRol, listarRoles, modificarRol, obtenerRol } from "../controllers/rolController";
import express from 'express';

const router = express.Router();

router.post('/',insertarRol);
router.get('/',listarRoles);
router.get('/:id',obtenerRol);
router.put('/:id',modificarRol);
router.delete('/:id',eliminarRol);

export default router;