import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../Services/app.service';
import { NewsDto } from '../dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAllNews(): NewsDto[] {
    return this.newsService.getAllNews();
  }
}
