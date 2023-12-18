import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // do tasks
        console.log('Excuting request...');
        next();
    }
    /**this middleware does not get rid of the (node:20256)
   [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] 
   DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. 
   Please use the 'setupMiddlewares' option. that shows up when the frontend is started
   from the commad-line*/
}