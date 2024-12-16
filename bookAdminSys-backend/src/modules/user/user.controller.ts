import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return "user" + this.userService.findOne(id)
    }

}
