import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth')
export class AuthController {
    @UseGuards(AuthGuard('local')) // Usa a estratégia local para autenticação
    @Post('login')
    async login(@Req() req: any) { // Recebe a requisição para retornar o usuário
        return { success: true, user: req.user }; // Retorna o usuário autenticado
    }
}
