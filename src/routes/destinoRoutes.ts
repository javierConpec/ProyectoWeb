import express from 'express';
import { eliminarDestino, insertarDestino, listarDestinos, modificarDestino, obtenerDestino } from '../controllers/destinoController';

const router = express.Router();

router.post('/', insertarDestino);
router.get('/', listarDestinos);
router.get('/:id', obtenerDestino);
router.put('/:id', modificarDestino);
router.patch('/:id', eliminarDestino);

export default router;
