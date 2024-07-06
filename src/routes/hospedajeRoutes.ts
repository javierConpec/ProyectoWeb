import express from 'express';
import { eliminarHospedaje,insertarHospedaje,obtenerHospedaje,modifiicarHospedaje,listarHospedajes } from '../controllers/hospedajeContoller';

const router=express.Router();
router.post('/',insertarHospedaje);
router.get('/', listarHospedajes);
router.get('/:id', obtenerHospedaje);
router.put('/:id', modifiicarHospedaje);
router.delete('/:id', eliminarHospedaje);

export default router;