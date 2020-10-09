import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Posts } from '../entity/posts.entity';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  const mockRepository = {};

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PostsService,
        { provide: getRepositoryToken(Posts), useValue: mockRepository },
      ],
    }).compile();

    postsService = moduleRef.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(postsService).toBeDefined();
  });
});
