"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hospedajeContoller_1 = require("../controllers/hospedajeContoller");
const router = express_1.default.Router();
router.post('/', hospedajeContoller_1.insertarHospedaje);
router.get('/', hospedajeContoller_1.listarHospedajes);
router.get('/:id', hospedajeContoller_1.obtenerHospedaje);
router.put('/:id', hospedajeContoller_1.modifiicarHospedaje);
router.patch('/:id', hospedajeContoller_1.eliminarHospedaje);
exports.default = router;
//# sourceMappingURL=hospedajeRoutes.js.map