import { eliminarItinerario,modificarItinerario,listarItinerarios,insertarItinerario,obtnerItinerario } from "../controllers/itinerarioController";
import express from 'express'
import { obtenerCategoria } from "../services/categoriaService";

const router = express.Router();

router.post('/',insertarItinerario);
router.get('/',listarItinerarios);
router.get('/:id',obtenerCategoria);
router.put('/:id',modificarItinerario);
router.patch('/:id',eliminarItinerario)

export default router;