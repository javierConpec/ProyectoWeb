"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paisController_1 = require("../controllers/paisController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', paisController_1.insertarPais);
router.get('/', paisController_1.listarPaises);
router.get('/:id', paisController_1.obtenerPais);
router.put('/:id', paisController_1.modificarPais);
router.patch('/:id', paisController_1.eliminarPais);
exports.default = router;
//# sourceMappingURL=paisRoutes.js.map