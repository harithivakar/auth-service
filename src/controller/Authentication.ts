import {Request, Response} from 'express';
import {controller, httpGet, httpPatch, httpPost, httpPut} from 'inversify-express-utils';
import Constants from '../constants/Constants';

@controller(`${Constants.CONTEXT_PATH}/auth`)
export class AuthenticationController {

    @httpPost('/register')
    public async register(req: Request, res: Response){
        
    }

    @httpPost('/login')
    public async login(req: Request, res: Response){
        
    }

    @httpGet('/login/refresh/:id')
    public async refreshToken(req: Request, res: Response){
        
    }

    @httpGet('/login/:username')
    public async forgotPassword(req: Request, res: Response){
        
    }

    @httpGet('/login/:id')
    public async forgotUsername(req: Request, res: Response){
        
    }
}