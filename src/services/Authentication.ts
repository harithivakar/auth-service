import { provideSingleton } from "../IOC/ioc";

@provideSingleton(AuthenticationService)
export class AuthenticationService {
    public async registerUser(data: object): Promise<object[]> {
        return [];
    }

    public async login(): Promise<void> {
        
    }
}