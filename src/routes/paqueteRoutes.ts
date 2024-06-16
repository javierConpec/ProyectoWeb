import { eliminarPaquete,modificarPaquete,listarPaquetes,insertarPaquete,obtenerPaquete } from "../controllers/paqueteController";
import express from 'express'

const router = express.Router();

router.post('/',insertarPaquete);
router.get('/',listarPaquetes);
router.get('/:id',obtenerPaquete);
router.put('/:id',modificarPaquete);
router.patch('/:id',eliminarPaquete)

export default router;