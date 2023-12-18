import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    // connection to mongodb, format mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]
    MongooseModule.forRoot('mongodb+srv://admin:1QR53KKPwIkiFxsm@products.2zepn5r.mongodb.net/?retryWrites=true&w=majority'),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}