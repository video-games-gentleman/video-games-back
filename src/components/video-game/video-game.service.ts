import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoGame } from './video-games.entity';

@Injectable()
export class VideoGameService {
  constructor(
    @InjectRepository(VideoGame)
    private videoGameRepository: Repository<VideoGame>,
  ) {}

  async findAll(): Promise<VideoGame[]> {
    return await this.videoGameRepository.find({
      relations: {
          assets: true,
      },
  })
  }

  findOne(id: number): Promise<VideoGame> {
    return this.videoGameRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.videoGameRepository.delete(id);
  }

}