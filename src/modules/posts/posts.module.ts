import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterConfig } from 'src/shared/config/multer.config';
import { PostsController } from './controller/posts.controller';
import { Posts } from './entity/posts.entity';
import { PostsService } from './service/posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posts]),
    MulterModule.registerAsync({
      useClass: MulterConfig,
    }),
  ],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
