import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoGamesAssetsService } from './video-games-assets.service';
import { VideoGamesAssetsController } from './video-games-assets.controller';
import { VideoGameAsset } from './video-games-assets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoGameAsset])],
  exports: [TypeOrmModule],
  controllers: [VideoGamesAssetsController],
  providers: [VideoGamesAssetsService]
})
export class VideoGamesAssetsModule {}
