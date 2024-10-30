import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({summary: 'Register new user'})
    @ApiResponse({ status: HttpStatus.CREATED, description: 'User successfully created'})
    @ApiResponse({ status: HttpStatus.CONFLICT, description: 'User already exists'})
    async signup(@Body() createUserDto: CreateUserDto) {
        return this.authService.signUp(createUserDto);
    }
    
}
