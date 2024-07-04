import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsType } from './posts.interface';

@Controller('posts')
export class PostsController {
  // MEMO: constructorとは、pythonでいう__init__メソッドのこと。
  // サービスを呼び出すときは、コンストラクタ内に記述する。
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: PostsType): void {
    this.postsService.create(post);
  }
}
