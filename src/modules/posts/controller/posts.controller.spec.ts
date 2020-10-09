import { Test } from '@nestjs/testing';
import { PostsService } from '../service/posts.service';
import { PostsController } from './posts.controller';

describe('PostsController', () => {
  let postsController: PostsController;

  const mockPostsService = {};

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [{ provide: PostsService, useValue: mockPostsService }],
    }).compile();

    postsController = moduleRef.get<PostsController>(PostsController);
  });

  it('should be defined', () => {
    expect(postsController).toBeDefined();
  });
});
