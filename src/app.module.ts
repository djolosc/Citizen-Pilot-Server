import { Module } from '@nestjs/common';
import { NewsController } from './app.controller';
import { NewsService } from './app.service';

@Module({
  imports: [],
  controllers: [NewsController],
  providers: [newservice],
})
export class AppModule {}
