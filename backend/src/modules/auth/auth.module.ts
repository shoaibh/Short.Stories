import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../orm/entity/User.entity';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
