"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const api_service_1 = require("./api.service");
const create_api_dto_1 = require("./dto/create-api.dto");
const swagger_1 = require("@nestjs/swagger");
let ApiController = class ApiController {
    constructor(apiService) {
        this.apiService = apiService;
    }
    findAllProductsDelayed() {
        return this.apiService.findAllProductsWith3SecDelay();
    }
    findAllShoppingDelayed() {
        return this.apiService.findAllShoppingWith3SecDelay();
    }
    addShopping(shoppingData) {
        return this.apiService.addToShoppingList(shoppingData);
    }
    removeShoppingById(id) {
        return this.apiService.removeFromShoppingList(id);
    }
};
exports.ApiController = ApiController;
__decorate([
    (0, common_1.Get)("productsList"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "findAllProductsDelayed", null);
__decorate([
    (0, common_1.Get)("shoppingList"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "findAllShoppingDelayed", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: create_api_dto_1.CreateApiDto }),
    (0, common_1.Post)("shoppingList"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_api_dto_1.CreateApiDto]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "addShopping", null);
__decorate([
    (0, common_1.Delete)("shoppingList/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "removeShoppingById", null);
exports.ApiController = ApiController = __decorate([
    (0, common_1.Controller)("api"),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ApiController);
//# sourceMappingURL=api.controller.js.map