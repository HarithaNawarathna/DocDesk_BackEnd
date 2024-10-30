import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

    async createUser(createUserDto : CreateUserDto): Promise<UserDocument>{
        try {
            const user = new this.UserModel(createUserDto);
            return await user.save();
        } catch (error) {
            throw new InternalServerErrorException(
                'Internal server error'
            )
        }
    }
}
