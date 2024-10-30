import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,

    ) {}
  
    async signUp(createUserDto: CreateUserDto) {
        try {
            const user = await this.userService.createUser(createUserDto)
            return{
                user: user
            }
            
        }catch(error){
            throw new InternalServerErrorException(
                'Internal server eroor'
            )
        }
    }
}
