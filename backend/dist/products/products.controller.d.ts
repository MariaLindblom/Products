import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    createProduct(res: any, CreateProductDto: CreateProductDto): Promise<any>;
    getProducts(res: any): Promise<any>;
    getProduct(res: any, productID: any): Promise<any>;
    editProduct(res: any, productID: any, CreateProductDto: CreateProductDto): Promise<any>;
    deleteProduct(res: any, productID: any): Promise<any>;
}
