"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_api_dto_1 = require("./create-api.dto");
class UpdateApiDto extends (0, swagger_1.PartialType)(create_api_dto_1.CreateApiDto) {
}
exports.UpdateApiDto = UpdateApiDto;
//# sourceMappingURL=update-api.dto.js.map