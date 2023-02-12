import { Controller } from '@nestjs/common';
import { VideoGamesAssetsService } from './video-games-assets.service';

@Controller('video-games-assets')
export class VideoGamesAssetsController {
  constructor(private readonly videoGamesAssetsService: VideoGamesAssetsService) {}
}
