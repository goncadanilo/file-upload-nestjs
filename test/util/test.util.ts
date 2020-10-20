import { Posts } from '../../src/modules/posts/entity/posts.entity';

export class TestUtil {
  static getMockPost(): Posts {
    const post = new Posts();
    post.id = 1;
    post.description = 'any description';
    post.image = 'any_image.png';
    post.hashtags = 'any,any';
    post.createdAt = new Date();

    return post;
  }
}
