import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  IsBoolean,
  Matches,
  IsEnum,
} from 'class-validator';
import { UserRoles } from 'common/enums/user-roles.enum';

export class CreateUserDto {
  @ApiProperty({ example: 'johndoe' })
  @IsString()
  username: string;

  @ApiProperty({ example: UserRoles.EDITOR, enum: UserRoles })
  @IsEnum(UserRoles)
  @IsOptional()
  role?: UserRoles;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123' })
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/[a-zA-Z]/, {
    message: 'Password must contain at least one letter.',
  })
  @Matches(/[0-9]/, { message: 'Password must contain at least one digit.' })
  password: string;

  @ApiProperty({ example: false, required: false })
  @IsOptional()
  @IsBoolean()
  is_verified?: boolean;

  @ApiProperty({ example: '+1234567890', required: false })
  @IsString()
  @IsOptional()
  phone_number?: string;
}
