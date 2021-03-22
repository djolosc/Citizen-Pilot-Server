import { Controller, Get } from '@nestjs/common';
import { NewsService } from './app.service';
import { NewsDto } from '../dto';
@Controller('news')
export class NewsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAllNews(): NewsDto[] {
    return this.appService.getAllNews();
  }
}
