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
  //logger shows messages in control line, helps with testing the api 
  //and seeing if the api works

  //creating a product
  async createProduct(CreateProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(CreateProductDto);
    this.logger.log('Created a new product');
    return newProduct.save();
  }

  //getting all tha products
  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    this.logger.log('Returning all products'); /**this shows "[Nest] 21112 - 18/12/2023, 
    6.28.06  LOG [ProductsService] Returning all products" in the command-line
    when all products are fetched successfully*/
    return products;
  }

  //get product by id
  async getProduct(productID: number): Promise<Product> {
    const product = await this.productModel
      .findById(productID)
      .exec();
    this.logger.log(`Returning post with id: ${productID}`); /**this shows "[Nest] 21112  - 18/12/2023, 7.01.44 
        LOG [ProductsService] Returning post with id: 65749c2f2726b824007cb584" in the command-line
        when a product is successfully fetched from the api*/
    return product;
  }

  //edit product by id
  async editProduct(productID: number, UpdateProductDto: UpdateProductDto) {
    const editedProduct = await this.productModel
      .findByIdAndUpdate(productID, UpdateProductDto, { new: true });
    this.logger.log(`Updating product with id: ${productID}`);
    return editedProduct;
  }

  //delete product by id
  async deleteProduct(productID: number): Promise<any> {
    const deletedProduct = await this.productModel
      .findByIdAndDelete(productID);
    this.logger.log('Deleted a product');
    return deletedProduct;
  }
}