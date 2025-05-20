import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {

  private readonly logger = new Logger('PostService');

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) { }


  async create(createPostDto: CreatePostDto) {
    try {
      const newPost = this.postRepository.create(createPostDto);
      await this.postRepository.save(newPost);

      return newPost
    } catch (error) {
      this.handleError(error);
    }
  }

  findAll() {
    return this.postRepository.find({ });
  }

  async findOne(id: string) {
    try {
      const post = await this.postRepository.findOneBy({ id });

      if (!post)
        throw new NotFoundException(`No se pudo encontrar el Post (${id})`)

      return post;
    } catch (error) {
      this.handleError(error);
    }

  }

  async remove(id: string) {
    try {
      const post = await this.findOne(id);

      if (!post)
        throw new NotFoundException(`No se pudo encontrar el Post (${id})`)

      await this.postRepository.remove(post);
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any) {
    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    if (error instanceof NotFoundException) {
      this.logger.warn(error.message);
      throw error;
    }

    this.logger.error(error)
    throw new InternalServerErrorException('Ha ocurrido un error, favor revisar logs');
  }
}
