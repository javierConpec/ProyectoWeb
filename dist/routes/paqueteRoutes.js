"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paqueteController_1 = require("../controllers/paqueteController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', paqueteController_1.insertarPaquete);
router.get('/', paqueteController_1.listarPaquetes);
router.get('/:id', paqueteController_1.obtenerPaquete);
router.put('/:id', paqueteController_1.modificarPaquete);
router.patch('/:id', paqueteController_1.eliminarPaquete);
exports.default = router;
//# sourceMappingURL=paqueteRoutes.js.map