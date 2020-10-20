import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TestUtil } from '../../../../test/util/test.util';
import { Posts } from '../entity/posts.entity';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  let mockPost: Posts;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PostsService,
        { provide: getRepositoryToken(Posts), useValue: mockRepository },
      ],
    }).compile();

    postsService = moduleRef.get<PostsService>(PostsService);
    mockPost = TestUtil.getMockPost();
  });

  beforeEach(() => {
    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
    mockRepository.find.mockReset();
  });

  it('should be defined', () => {
    expect(postsService).toBeDefined();
  });

  describe('when create post', () => {
    it('should create a post', async () => {
      mockRepository.create.mockReturnValue(mockPost);
      mockRepository.save.mockReturnValue(mockPost);

      const post = {
        description: mockPost.description,
        image: mockPost.image,
        hashtags: mockPost.hashtags,
      };

      const savedPost = await postsService.createPost(post);

      expect(savedPost).toHaveProperty('id', 1);
      expect(savedPost).toMatchObject(mockPost);
      expect(mockRepository.create).toBeCalledWith(post);
      expect(mockRepository.save).toBeCalledWith(mockPost);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all posts', () => {
    it('should find all posts', async () => {
      mockRepository.find.mockReturnValue([mockPost, mockPost]);

      const posts = await postsService.findAllPosts();

      expect(posts).toHaveLength(2);
      expect(posts).toStrictEqual([mockPost, mockPost]);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });
});
