import { eliminarRol, insertarRol, listarRoles, modificarRol, obtenerRol } from "../controllers/rolController";
import express from 'express';

const router = express.Router();

router.post('/',insertarRol);
router.get('/',listarRoles);
router.get('/:id',obtenerRol);
router.put('/:id',modificarRol);
<<<<<<< HEAD
router.patch('/:id',eliminarRol);

=======
router.delete('/:id',eliminarRol);
//prueba
>>>>>>> 130b4a0ac54fec2287840987a3fd9eb2d010063b
export default router;