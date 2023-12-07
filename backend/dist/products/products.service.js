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
var ProductsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = ProductsService_1 = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
        this.logger = new common_1.Logger(ProductsService_1.name);
    }
    async createProduct(CreateProductDto) {
        const newProduct = new this.productModel(CreateProductDto);
        this.logger.log('Created a new product');
        return newProduct.save();
    }
    async getProducts() {
        const products = await this.productModel.find().exec();
        this.logger.log('Returning all products');
        return products;
    }
    async getProduct(productID) {
        const product = await this.productModel
            .findById(productID)
            .exec();
        this.logger.log(`Returning post with id: ${productID}`);
        return product;
    }
    async editProduct(productID, createProductDto) {
        const editedProduct = await this.productModel
            .findByIdAndUpdate(productID, createProductDto, { new: true });
        this.logger.log(`Updating product with id: ${productID}`);
        return editedProduct;
    }
    async deleteProduct(productID) {
        const deletedProduct = await this.productModel
            .findByIdAndDelete(productID);
        this.logger.log('Deleted a product');
        return deletedProduct;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = ProductsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
//# sourceMappingURL=products.service.js.map