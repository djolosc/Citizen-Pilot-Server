import { Module } from '@nestjs/common';
import { NewsController } from '../Controllers/news.controller';
import { NewsService } from '../Services/news.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    NewsModule,
],
  controllers: [NewsController],
  providers: [NewsService],
})
export class AppModule {}
