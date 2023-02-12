import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { VideoGame } from '../video-game/video-games.entity';

export enum assetType { 
    COVER = "cover",
    IMAGE = "image",
    VIDEO = "video",
    EXCLUSIVE_IMAGE = "exclusive_image",
    EXCLUSIVE_VIDEO = "exclusive_video",
}

@Entity({name: 'video_game_assets'})
export class VideoGameAsset {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: assetType,
        default: assetType.IMAGE,
    })
    type: string

    @Column()
    resource_url: string

    @ManyToOne(() => VideoGame, (videoGame) => videoGame.assets)
    @JoinColumn({ name: "video_game_id" })
    videoGame: VideoGame
 
}
