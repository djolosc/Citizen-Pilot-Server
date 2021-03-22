import { Controller, Get, Post, Req } from '@nestjs/common';
import { NewsService } from '../Services/news.service';
import { NewsDto } from '../dto';
import { Request } from 'express';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async findAllNews(): Promise<NewsDto[]> {
    return await this.newsService.getAllNews();
  }

  @Post()
   async create(@Req() req: Request) {
      this.newsService.postNews(req);
      return req.body;
  }
}