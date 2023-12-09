import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    createProduct(res: any, CreateProductDto: CreateProductDto): Promise<any>;
    getProducts(res: any): Promise<any>;
    getProduct(res: any, productID: any): Promise<any>;
    editProduct(res: any, productID: any, UpdateProductDto: UpdateProductDto): Promise<any>;
    deleteProduct(res: any, productID: number): Promise<any>;
}
