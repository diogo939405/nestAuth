import { Module,OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.Module';
import { AuthModule } from './auth/auth.module';

@Module({
     imports: [ ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'Filand21*',
      database: 'teste-nest',
      entities: [User],
      extra: {
        authPlugins: { 
          mysql_native_password: 'mysql_native_password',
        },
      },
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('Successfully connected to the database');
  }
}
