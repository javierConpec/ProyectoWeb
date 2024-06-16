import { eliminarPais,modificarPais,listarPaises,insertarPais,obtenerPais } from "../controllers/paisController";
import express from 'express'

const router = express.Router();

router.post('/',insertarPais);
router.get('/',listarPaises);
router.get('/:id',obtenerPais);
router.put('/:id',modificarPais);
router.patch('/:id',eliminarPais)

export default router;