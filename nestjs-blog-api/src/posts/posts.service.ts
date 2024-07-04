import { Injectable } from '@nestjs/common';
import { PostsType } from './posts.interface';

@Injectable()
export class PostsService {
  // private readonlyをつけることによりクラス内でのみアクセス可能な変数として定義
  private readonly posts: PostsType[] = [];

  findAll(): PostsType[] {
    return this.posts;
  }

  create(post: PostsType) {
    this.posts.push(post);
  }
}
