import { ApiService } from "./api.service";
import { CreateApiDto } from "./dto/create-api.dto";
export declare class ApiController {
    private readonly apiService;
    constructor(apiService: ApiService);
    findAllProductsDelayed(): Promise<unknown>;
    findAllShoppingDelayed(): Promise<unknown>;
    addShopping(shoppingData: CreateApiDto): Promise<unknown>;
    removeShoppingById(id: string): Promise<unknown>;
}
