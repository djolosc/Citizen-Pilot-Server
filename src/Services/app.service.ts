import { Injectable } from '@nestjs/common';
import { NewsDto } from '../dto';
@Injectable()
export class NewsService {
  getAllNews(): NewsDto[] {
    return [{
      id: '1',
      NewsShortDescription: 'HURRICANE IS COMING ON WEDNESDAY',
      NewsLongDescription: "Get prepared for the storm ",
      NewsLocation: 'EVERYWHEre',
      NewsDate: "10-11-2021",
      NewsImage: "img"}];
  }
}
