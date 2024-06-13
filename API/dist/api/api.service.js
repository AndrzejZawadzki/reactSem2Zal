"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const products_consts_1 = require("./products.consts");
let ApiService = class ApiService {
    constructor() {
        this.instanceProducts = products_consts_1.products;
        this.instanceShopping = [];
        this.instanceNewShopingId = 100;
    }
    findAllProductsWith3SecDelay() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.instanceProducts.map((product) => ({
                    id: product.id,
                    name: product.name,
                    category: product.category,
                    isFood: product.isFood,
                })));
            }, 3000);
        });
    }
    findAllShoppingWith3SecDelay() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.instanceShopping.map((product) => ({
                    id: product.id,
                    name: product.name,
                    category: product.category,
                    isFood: product.isFood,
                })));
            }, 3000);
        });
    }
    addToShoppingList(shoppingListElement) {
        const newShoppingPosition = {
            ...shoppingListElement,
            id: this.instanceNewShopingId.toString(),
        };
        this.instanceShopping.push(newShoppingPosition);
        this.instanceNewShopingId += 1;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(newShoppingPosition);
            }, 3000);
        });
    }
    removeFromShoppingList(id) {
        const removedShoppingElement = this.instanceShopping.find((shoppingEl) => shoppingEl.id === id);
        this.instanceShopping = this.instanceShopping.filter((shoppingEl) => shoppingEl.id !== id);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(removedShoppingElement);
            }, 3000);
        });
    }
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, common_1.Injectable)()
], ApiService);
//# sourceMappingURL=api.service.js.map