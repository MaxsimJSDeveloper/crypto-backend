import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({ example: 'John', description: 'User nick' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Max Holovko', description: 'User name' })
  @IsString()
  userName: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'User email' })
  @IsString()
  email: string;

  @ApiProperty({ example: '12345678', description: 'User password' })
  @IsString()
  password: string;
}

export class UpdateUserDTO {
  @ApiProperty({ example: 'John', description: 'User nick' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Max Holovko', description: 'User name' })
  @IsString()
  userName: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'User email' })
  @IsString()
  email: string;
}
