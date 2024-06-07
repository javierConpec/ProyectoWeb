"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModel = void 0;
class ResponseModel {
    constructor(success, message, status, data) {
        this.success = success;
        this.message = message;
        this.status = status;
        this.data = data;
    }
    static success(data, message = 'OK') {
        return new ResponseModel(true, message, 200, data);
    }
    static error(message) {
        return new ResponseModel(false, message, 500, null);
    }
}
exports.ResponseModel = ResponseModel;
//# sourceMappingURL=ResponseModel.js.map