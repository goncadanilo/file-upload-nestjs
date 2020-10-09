import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './entity/posts.entity';
import { PostsService } from './service/posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  providers: [PostsService],
})
export class PostsModule {}
