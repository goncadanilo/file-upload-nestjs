import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PostsService } from '../service/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createPost(@UploadedFile() file, @Body() data: CreatePostDto) {
    return await this.postsService.createPost({
      ...data,
      image: file?.filename,
    });
  }
}
