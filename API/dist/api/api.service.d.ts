import { CreateApiDto } from "./dto/create-api.dto";
export declare class ApiService {
    instanceProducts: {
        id: string;
        name: string;
        category: string;
        isFood: boolean;
    }[];
    instanceShopping: any[];
    instanceNewShopingId: number;
    findAllProductsWith3SecDelay(): Promise<unknown>;
    findAllShoppingWith3SecDelay(): Promise<unknown>;
    addToShoppingList(shoppingListElement: CreateApiDto): Promise<unknown>;
    removeFromShoppingList(id: string): Promise<unknown>;
}
