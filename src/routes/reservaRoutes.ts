import { eliminarReserva,modificarReserva,listarReservas,insertarReserva,obtenerResrva } from "../controllers/reservaController";
import express from 'express'

const router = express.Router();

router.post('/',insertarReserva);
router.get('/',listarReservas);
router.get('/:id',obtenerResrva);
router.put('/:id',modificarReserva);
router.patch('/:id',eliminarReserva)

export default router;