import { Module } from '@nestjs/common';
import { NewsController } from '../Controllers/news.controller';
import { NewsService } from '../Services/news.service';

@Module({
  imports: [],
  controllers: [NewsController],
  providers: [NewsService],
})
export class AppModule {}
