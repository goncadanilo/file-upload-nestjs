import { Test } from '@nestjs/testing';
import { TestUtil } from '../../../../test/util/test.util';
import { Posts } from '../entity/posts.entity';
import { PostsService } from '../service/posts.service';
import { PostsController } from './posts.controller';

describe('PostsController', () => {
  let postsController: PostsController;
  let mockPost: Posts;

  const mockPostsService = {
    createPost: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [{ provide: PostsService, useValue: mockPostsService }],
    }).compile();

    postsController = moduleRef.get<PostsController>(PostsController);
    mockPost = TestUtil.getMockPost();
  });

  beforeEach(() => {
    mockPostsService.createPost.mockReset();
  });

  it('should be defined', () => {
    expect(postsController).toBeDefined();
  });

  describe('when create post', () => {
    it('should create a post and return it', async () => {
      mockPostsService.createPost.mockReturnValue(mockPost);

      const post = {
        description: mockPost.description,
        hashtags: mockPost.hashtags,
      };

      const createdPost = await postsController.createPost(
        mockPost.image,
        post,
      );

      expect(createdPost).toHaveProperty('id', 1);
      expect(createdPost).toMatchObject(mockPost);
    });
  });
});
