import { UserService } from './shared/user.service';
import { Controller, Get, Param, Body, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { User } from './shared/user';
import { JwtAuthGuard } from './../auth/shared/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<User>{
        return this.usersService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() user: User): Promise<User>{
        return this.usersService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() user: User): Promise<User>{
        return this.usersService.update(id, user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        this.usersService.delete(id);
    }

}
