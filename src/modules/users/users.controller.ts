import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { jwtAuthGuard } from 'src/guards/jwtGuard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiTags('Users')
  @ApiOperation({ summary: 'Get current user info' })
  @ApiResponse({ status: 200, description: 'User data retrieved' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(jwtAuthGuard)
  @Get()
  getUserInfo(@Req() request) {
    const user = request.user;
    return this.userService.publicUser(user.email);
  }

  @ApiTags('Users')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User successfully created',
    type: CreateUserDTO,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Post()
  createUsers(@Body() dto: CreateUserDTO) {
    return this.userService.createUser(dto);
  }

  @ApiTags('Users')
  @ApiOperation({ summary: 'Update user information' })
  @ApiResponse({
    status: 200,
    description: 'User successfully updated',
    type: UpdateUserDTO,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(jwtAuthGuard)
  @Patch()
  updateUser(
    @Body() updateDto: UpdateUserDTO,
    @Req() request,
  ): Promise<UpdateUserDTO> {
    const user = request.user;
    return this.userService.updateUser(user.email, updateDto);
  }

  @ApiTags('Users')
  @ApiOperation({ summary: 'Delete current user' })
  @ApiResponse({ status: 200, description: 'User successfully deleted' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(jwtAuthGuard)
  @Delete()
  deleteUser(@Req() request) {
    const user = request.user;
    return this.userService.deleteUser(user.email);
  }
}
