import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'nome', // Aqui você deve usar o campo correto para o login
        });
    }
    async validate(nome: string, senha: string): Promise<any> {
        // Valida o usuário usando o AuthService
        const user = await this.authService.validateUser(nome, senha); // Passe o nome e a senha
        
        // Se o usuário não for encontrado ou a senha estiver errada, lança uma exceção apropriada
        if (!user) {
            throw new UnauthorizedException('Credenciais inválidas');
        }
        
        // Retorna o usuário validado
        return user;
    }
}
