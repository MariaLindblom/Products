import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './products.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  private readonly logger = new Logger(ProductsService.name);

  async createProduct(CreateProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(CreateProductDto);
    this.logger.log('Created a new product');
    return newProduct.save();
  }

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    this.logger.log('Returning all products');
    return products;
  }

  async getProduct(productID: number): Promise<Product> {
    const product = await this.productModel
      .findById(productID)
      .exec();
    this.logger.log(`Returning post with id: ${productID}`);
    return product;
  }

  async editProduct(productID: number, UpdateProductDto: UpdateProductDto) {
    const editedProduct = await this.productModel
      .findByIdAndUpdate(productID, UpdateProductDto, { new: true });
    this.logger.log(`Updating product with id: ${productID}`);
    return editedProduct;
  }

  async deleteProduct(productID: number): Promise<any> {
    const deletedProduct = await this.productModel
      .findByIdAndDelete(productID);
    this.logger.log('Deleted a product');
    return deletedProduct;
  }
}
