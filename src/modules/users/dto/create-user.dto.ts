import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsEnum, IsDateString, IsNotEmpty, Matches } from "class-validator";
import { UserRole } from "src/common/enums/role.enum";
import { AccountStatus } from "src/common/enums/status.enum";

export class CreateUserDto {
    @ApiProperty({ description: "First name of the user", example: "John" })
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({ description: "Last name of the user", example: "Doe" })
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({ description: "Date of birth of the user", example: "1990-01-01" })
    @IsDateString()
    dob: Date;

    @ApiProperty({ description: "Gender of the user", example: "Male" })
    @IsString()
    @IsNotEmpty()
    gender: string;

    @ApiProperty({ description: "Postal address of the user", example: "123 Main St, Cityville" })
    @IsString()
    @IsNotEmpty()
    postalAddress: string;

    @ApiProperty({ description: "Work contact number", example: "+123456789" })
    @IsString()
    @Matches(/^\+?\d{7,15}$/, { message: "Work contact number must be a valid phone number" })
    contactNumber_work: string;

    @ApiProperty({ description: "Personal contact number", example: "+987654321" })
    @IsString()
    @Matches(/^\+?\d{7,15}$/, { message: "Personal contact number must be a valid phone number" })
    contactNumber_personal: string;

    @ApiProperty({ description: "Email of the user", example: "john.doe@example.com" })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: "Password for the user account", example: "StrongPassword123!" })
    @IsString()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: "Password must be at least 8 characters long and contain letters and numbers" })
    password: string;

    @ApiProperty({ description: "National ID of the user", example: "123456789V" })
    @IsString()
    @IsNotEmpty()
    nic: string;

    @ApiProperty({ description: "SLMC registration number of the user", example: "SLMC12345" })
    @IsString()
    @IsNotEmpty()
    slmcRegistrationNo: string;

    @ApiProperty({ description: "Current position of the user", example: "Consultant" })
    @IsString()
    @IsNotEmpty()
    currentPosition: string;

    @ApiProperty({ description: "Qualifications of the user", example: "MBBS, MD" })
    @IsString()
    @IsNotEmpty()
    qualifications: string;

    @ApiProperty({ description: "Place of work of the user", example: "City Hospital" })
    @IsString()
    @IsNotEmpty()
    placeofWork: string;

    @ApiProperty({ description: "Role of the user", enum: UserRole, example: UserRole.DOCTOR })
    @IsEnum(UserRole)
    role: UserRole;

    @ApiProperty({ description: "Account status of the user", enum: AccountStatus, example: AccountStatus.APPROVED })
    @IsEnum(AccountStatus)
    status: AccountStatus;
}
