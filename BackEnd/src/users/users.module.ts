import { UserService } from './shared/user.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    ],
    controllers: [UsersController],
    providers: [UserService]
})
export class UsersModule { }
