import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { UserRole } from "src/common/enums/role.enum";
import { AccountStatus } from "src/common/enums/status.enum";


export type UserDocument = User & Document;

@Schema({timestamps: true})
export class User{
    @Prop({required: true})
    firstName: string;

    @Prop({required: true})
    lastName: string;

    @Prop({required: true, type: Date})
    dob: Date;

    @Prop({required: true})
    gender: string;

    @Prop({required: true})
    postalAddress: string;

    @Prop({required: true})
    contactNumber_work: string;

    @Prop({required: true})
    contactNumber_personal: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    nic: string;

    @Prop({required: true})
    slmcRegistrationNo: string;

    @Prop({required: true})
    currentPosition: string;

    @Prop({required: true})
    qualifications: string;

    @Prop({required: true})
    placeofWork: string;
    
    @Prop({required: true, enum: UserRole})
    role: UserRole ;

    @Prop({required: true, enum: AccountStatus})
    status: AccountStatus ;
    
}

export const USerSchema = SchemaFactory.createForClass(User);

