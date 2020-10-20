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
    findAllPosts: jest.fn(),
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
    mockPostsService.findAllPosts.mockReset();
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
      expect(mockPostsService.createPost).toBeCalledWith({ ...post });
      expect(mockPostsService.createPost).toBeCalledTimes(1);
    });

    it('should be able create a post without an image', async () => {
      mockPostsService.createPost.mockReturnValue(mockPost);

      const post = {
        description: mockPost.description,
        hashtags: mockPost.hashtags,
      };

      const createdPost = await postsController.createPost(null, post);

      expect(createdPost).toHaveProperty('id', 1);
      expect(createdPost).toMatchObject(mockPost);
      expect(mockPostsService.createPost).toBeCalledWith({ ...post });
      expect(mockPostsService.createPost).toBeCalledTimes(1);
    });
  });

  describe('when search all posts', () => {
    it('should find all posts and return them', async () => {
      mockPostsService.findAllPosts.mockReturnValue([mockPost, mockPost]);

      const posts = await postsController.findAllPosts();

      expect(posts).toHaveLength(2);
      expect(posts).toStrictEqual([mockPost, mockPost]);
      expect(mockPostsService.findAllPosts).toBeCalledTimes(1);
    });
  });
});
