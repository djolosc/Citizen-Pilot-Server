import { Module } from '@nestjs/common';
import { NewsController } from '../Controllers/news.controller';
import { NewsService } from '../Services/news.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    models: [],
  }),],
  controllers: [NewsController],
  providers: [NewsService],
})
export class AppModule {}
