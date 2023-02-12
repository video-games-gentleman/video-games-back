import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class AppController {
  constructor() {}

  @Get("si")
  getHello(): string {
    return 'hello world'
  }
}
