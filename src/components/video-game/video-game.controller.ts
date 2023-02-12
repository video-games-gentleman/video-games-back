import { Controller, Get } from '@nestjs/common';
import { VideoGameService } from './video-game.service';
import { VideoGame } from './video-games.entity';

@Controller('video-game')
export class VideoGameController {

    constructor(private videoGameService:VideoGameService) { }
    
    @Get()
    async getVideoGames(): Promise<VideoGame[]> {
        return await this.videoGameService.findAll();
    }

}
