import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoGameModule } from './components/video-game/video-game.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'ivis123',
      password: 'ivis123',
      database: 'video_games',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    VideoGameModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
