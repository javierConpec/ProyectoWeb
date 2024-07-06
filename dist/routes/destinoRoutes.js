"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const destinoController_1 = require("../controllers/destinoController");
const router = express_1.default.Router();
router.post('/', destinoController_1.insertarDestino);
router.get('/', destinoController_1.listarDestinos);
router.get('/:id', destinoController_1.obtenerDestino);
router.put('/:id', destinoController_1.modificarDestino);
router.patch('/:id', destinoController_1.eliminarDestino);
exports.default = router;
//# sourceMappingURL=destinoRoutes.js.map