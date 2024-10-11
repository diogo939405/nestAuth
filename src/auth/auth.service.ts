import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async validateUser(nome: string, senha: string): Promise<any> {
        let user: User | null = null;
        try {
            user = await this.userService.findUserByName(nome);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        }
        if (!user) {
            return null; 
        }

        const senhaValida = compareSync(senha, user.senha); 
        if (!senhaValida) return null; 
        return user; 
    }}
