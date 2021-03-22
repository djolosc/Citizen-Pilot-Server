import { Module } from '@nestjs/common';
import { NewsController } from '../Controllers/app.controller';
import { NewsService } from '../Services/app.service';

@Module({
  imports: [],
  controllers: [NewsController],
  providers: [NewsService],
})
export class AppModule {}
