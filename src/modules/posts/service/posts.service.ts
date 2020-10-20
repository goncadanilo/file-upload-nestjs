import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Posts } from '../entity/posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private repository: Repository<Posts>,
  ) {}

  async createPost(data: CreatePostDto): Promise<Posts> {
    const post = this.repository.create(data);
    return await this.repository.save(post);
  }
}
