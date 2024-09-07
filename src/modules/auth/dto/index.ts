import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserLoginDTO {
  @ApiProperty({ example: 'john.doe@example.com', description: 'User email' })
  @IsString()
  email: string;

  @ApiProperty({ example: '12345678', description: 'User password' })
  @IsString()
  password: string;
}
