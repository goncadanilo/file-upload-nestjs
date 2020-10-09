import { Controller } from '@nestjs/common';
import { PostsService } from '../service/posts.service';

@Controller()
export class PostsController {
  constructor(private postsService: PostsService) {}
}
