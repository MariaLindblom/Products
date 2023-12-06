import { Controller, Get, Post, Body, Param, Delete, HttpStatus, NotFoundException, Put, Query, Res, UseFilters } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { HttpExceptionFilter } from '../http-exeption.filter';
//import { UpdateProductDto } from './dto/update-product.dto';
//import { ValidateObjectId } from './validate-object-id.pipes';

@Controller('products')
@UseFilters(HttpExceptionFilter)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //create a product
  @Post('/create')
  async createProduct(@Res() res, @Body() CreateProductDto: CreateProductDto) {
    const newProduct = await this.productsService.createProduct(CreateProductDto);
    return res.status(HttpStatus.OK).json({
      message: 'Product has been made successfully',
      post: this.createProduct,
    });
  }

  //get all products
  @Get('products')
  async getProducts(@Res() res) {
    const products = await this.productsService.getProducts();
    return res.status(HttpStatus.OK).json(products);
  }

  //get product by id
  @Get('products/:productID') 
  async getProduct(@Res() res, @Param('productID'/*, new ValidateObjectId()*/) productID) {
    const product = await this.productsService.getProduct(productID);
    if (!product) {
      throw new NotFoundException('Product does not exist');
    }
    return res.status(HttpStatus.OK).json(product);
  }
  
  //edit product
  @Put('/edit')
  async editProduct(
    @Res() res,
    @Query('productID'/*, new ValidateObjectId()*/) productID,
    @Body() CreateProductDto: CreateProductDto,
  ) {
    const editedProduct = await this.productsService.editProduct(productID, CreateProductDto);
    if (!editedProduct) {
      throw new NotFoundException('Product deos not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Past has been updated successfully',
      product: editedProduct,
    });
  }

  //delete product by id
  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productID'/*, new ValidateObjectId()*/) productID) {
    const deletedProduct = await this.productsService.deleteProduct(productID);
    if (!deletedProduct) {
      throw new NotFoundException('Product does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted',
      product: deletedProduct,
    });
  }
}
