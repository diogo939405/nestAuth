import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async find(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get('api/:id')
  async getUser(@Param('id')id:number):Promise<User>{
    return this.userService.getUser(id);
  }
@Post()
  async createUser(@Body() user:User): Promise<User> {
    console.log(user);
    if(user){
     console.log("user created");
     return this.userService.createUser(user);
    }else{
      console.log("no user");
    }
  }



  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }

}
