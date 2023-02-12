import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoGameAsset } from '../video-games-assets/video-games-assets.entity';
import { VideoGame } from './video-games.entity';

@Injectable()
export class VideoGameService {
  constructor(
    @InjectRepository(VideoGame)
    private videoGameRepository: Repository<VideoGame>,
    @InjectRepository(VideoGameAsset)
    private videoGameAssetRepository: Repository<VideoGameAsset>
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