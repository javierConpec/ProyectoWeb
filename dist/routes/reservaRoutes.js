"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reservaController_1 = require("../controllers/reservaController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', reservaController_1.insertarReserva);
router.get('/', reservaController_1.listarReservas);
router.get('/:id', reservaController_1.obtenerResrva);
router.put('/:id', reservaController_1.modificarReserva);
router.patch('/:id', reservaController_1.eliminarReserva);
exports.default = router;
//# sourceMappingURL=reservaRoutes.js.map