import { CreateUserDTO } from '../users/dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDTO } from './dto';
import { AuthUserResponse } from './response';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { jwtAuthGuard } from 'src/guards/jwtGuard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({
    status: 201,
    description: 'User successfully registered',
    type: CreateUserDTO,
  })
  @ApiBody({ type: CreateUserDTO, description: 'User registration data' })
  register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
    return this.authService.registerUsers(dto);
  }

  @Post('login')
  @ApiResponse({
    status: 200,
    description: 'User successfully logged in',
    type: AuthUserResponse,
  })
  @ApiResponse({ status: 400, description: 'Invalid credentials' })
  @ApiBody({ type: UserLoginDTO, description: 'User login data' })
  async login(@Body() dto: UserLoginDTO): Promise<AuthUserResponse> {
    return this.authService.loginUser(dto);
  }

  @Post('logout')
  @UseGuards(jwtAuthGuard)
  @ApiResponse({ status: 200, description: 'User successfully logged out' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async logout(): Promise<{ message: string }> {
    return { message: 'Successfully logged out' };
  }
}
