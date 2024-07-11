import { eliminarViaje,modificarViaje,listarViaje,insertarViaje,obtenerViaje } from "../controllers/viajeContoller";
import express from 'express'

const router = express.Router();

router.post('/',insertarViaje);
router.get('/',listarViaje);
router.get('/:id',obtenerViaje);
router.put('/:id',modificarViaje);
router.patch('/:id',eliminarViaje)

export default router;