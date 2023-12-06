import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './products.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async createProduct(CreateProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(CreateProductDto);
    return newProduct.save();
  }

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    return products;
  }

  async getProduct(productID: number): Promise<Product> {
    const product = await this.productModel
      .findById(productID)
      .exec();
    return product;
  }

  async editProduct(productID: number, createProductDto: CreateProductDto) {
    const editedProduct = await this.productModel
      .findByIdAndUpdate(productID, createProductDto, { new: true });
    return editedProduct;
  }

  async deleteProduct(productID: number): Promise<any> {
    const deletedProduct = await this.productModel
      .findByIdAndDelete(productID);
    return deletedProduct;
  }
}
