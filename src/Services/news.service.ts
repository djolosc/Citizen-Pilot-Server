import { Injectable } from '@nestjs/common';
import { NewsDto } from '../dto';
import DB from '../DBTest';


@Injectable()
export class NewsService {
  getAllNews(): NewsDto[] {
    return DB;
  }

  postNews(req) {
    DB.push(req.body);
  }
}


