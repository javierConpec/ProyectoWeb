"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const itinerarioController_1 = require("../controllers/itinerarioController");
const express_1 = __importDefault(require("express"));
const categoriaService_1 = require("../services/categoriaService");
const router = express_1.default.Router();
router.post('/', itinerarioController_1.insertarItinerario);
router.get('/', itinerarioController_1.listarItinerarios);
router.get('/:id', categoriaService_1.obtenerCategoria);
router.put('/:id', itinerarioController_1.modificarItinerario);
router.patch('/:id', itinerarioController_1.eliminarItinerario);
exports.default = router;
//# sourceMappingURL=itinerarioRoutes.js.map