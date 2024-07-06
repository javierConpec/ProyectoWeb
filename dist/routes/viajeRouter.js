"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const viajeContoller_1 = require("../controllers/viajeContoller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', viajeContoller_1.insertarViaje);
router.get('/', viajeContoller_1.listarViaje);
router.get('/:id', viajeContoller_1.obtenerViaje);
router.put('/:id', viajeContoller_1.modificarViaje);
router.patch('/:id', viajeContoller_1.eliminarViaje);
exports.default = router;
//# sourceMappingURL=viajeRouter.js.map