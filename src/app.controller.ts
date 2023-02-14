import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AppController {
  constructor() {}

  @UseGuards(AuthGuard('local'))

  @Post("login")
  async logic(@Request() req) {
    return req.user
  }
}
