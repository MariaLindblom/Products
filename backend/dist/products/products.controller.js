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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const http_exeption_filter_1 = require("../http-exeption.filter");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async createProduct(res, CreateProductDto) {
        const newProduct = await this.productsService.createProduct(CreateProductDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Product has been made successfully',
            post: this.createProduct,
        });
    }
    async getProducts(res) {
        const products = await this.productsService.getProducts();
        return res.status(common_1.HttpStatus.OK).json(products);
    }
    async getProduct(res, productID) {
        const product = await this.productsService.getProduct(productID);
        if (!product) {
            throw new common_1.NotFoundException('Product does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json(product);
    }
    async editProduct(res, productID, CreateProductDto) {
        const editedProduct = await this.productsService.editProduct(productID, CreateProductDto);
        if (!editedProduct) {
            throw new common_1.NotFoundException('Product deos not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Past has been updated successfully',
            product: editedProduct,
        });
    }
    async deleteProduct(res, productID) {
        const deletedProduct = await this.productsService.deleteProduct(productID);
        if (!deletedProduct) {
            throw new common_1.NotFoundException('Product does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Post has been deleted',
            product: deletedProduct,
        });
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)('products'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('products/:productID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('productID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "editProduct", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    (0, common_1.UseFilters)(http_exeption_filter_1.HttpExceptionFilter),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map