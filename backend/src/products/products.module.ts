import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './products.schema';
import { AuthenticationMiddleware } from '../authentication.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule 
{
  configure(consumer: MiddlewareConsumer){  }
  /**this middleware does not get rid of the (node:20256)
   [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] 
   DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. 
   Please use the 'setupMiddlewares' option. that shows up when the frontend is started
   from the commad-line*/
}
