import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

  async getUsers(): Promise<User[]> {
    try {
        return this.userRepository.find();
    } catch (error) {
      throw new NotFoundException(error.message)
    }
  
  }

  async getUser(id:number):Promise<User>{
    return this.userRepository.findOne({where:{id:id}})
  }

  async createUser(user: User): Promise<User> {
    user.senha = hashSync(user.senha, 10);  // Verifique se a senha é string aqui
    console.log("Hashed senha:", user.senha);  // Exibe a senha criptografada
    return this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
