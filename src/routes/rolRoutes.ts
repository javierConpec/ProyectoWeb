<<<<<<< HEAD
import { eliminarRol, insertarRol, listarRoles, modificarRol, obtenerRol } from "../controllers/rolController";
=======
import { eliminarRol, insertarRol, listarRoles, 
    modificarRol, obtenerRol } from "../controllers/rolController";
>>>>>>> 5defce0d6e2b28971e3feb4dab058f66c7d23044
import express from 'express';

const router = express.Router();

router.post('/',insertarRol);
router.get('/',listarRoles);
router.get('/:id',obtenerRol);
router.put('/:id',modificarRol);
router.patch('/:id',eliminarRol);

export default router;