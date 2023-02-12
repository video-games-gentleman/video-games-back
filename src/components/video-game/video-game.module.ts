
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoGame } from './video-games.entity';
import { VideoGameController } from './video-game.controller';
import { VideoGameService } from './video-game.service';

@Module({
  imports: [TypeOrmModule.forFeature([VideoGame])],
  exports: [TypeOrmModule],
  providers: [VideoGameService],
  controllers: [VideoGameController]
  
  
})
export class VideoGameModule {}