import express from 'express';
import { eliminarUsuario, insertarUsuario, listarUsuarios, modificarUsuario, obtenerUsuario } from '../controllers/usuarioContoller';

const router = express.Router();

router.post('/', insertarUsuario);
router.get('/', listarUsuarios);
router.get('/:id', obtenerUsuario);
router.put('/:id', modificarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;
